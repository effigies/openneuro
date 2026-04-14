import type { PipelineStage } from "mongoose"
import { builder } from "../builder"
import { UserProvider } from "./enums"
import User from "../../models/user"
import DatasetEvent from "../../models/datasetEvents"
import type { UserNotificationStatusDocument } from "../../models/userNotificationStatus"
import { UserRef, DatasetEventRef } from "./refs"

export { UserRef }

UserRef.implement({
  fields: (t) => ({
    id: t.id({
      resolve: (obj) => obj.id as string,
    }),
    provider: t.field({
      type: UserProvider,
      resolve: (obj) => obj.provider as "google" | "orcid",
    }),
    avatar: t.string({
      resolve: (obj) => obj.avatar as string,
    }),
    orcid: t.string({
      resolve: (obj) => obj.orcid as string,
    }),
    created: t.field({
      type: "DateTime",
      nullable: false,
      resolve: (obj) => obj.created as string,
    }),
    modified: t.field({
      type: "DateTime",
      resolve: (obj) => obj.updatedAt as string,
    }),
    lastSeen: t.field({
      type: "DateTime",
      resolve: (obj) => obj.lastSeen as string,
    }),
    email: t.string({
      resolve: (obj) => obj.email as string,
    }),
    name: t.string({
      resolve: (obj) => obj.name as string,
    }),
    admin: t.boolean({
      resolve: (obj) => obj.admin as boolean,
    }),
    blocked: t.boolean({
      resolve: (obj) => obj.blocked as boolean,
    }),
    location: t.string({
      resolve: (obj) => obj.location as string,
    }),
    institution: t.string({
      resolve: (obj) => obj.institution as string,
    }),
    github: t.string({
      resolve: (obj) => obj.github as string,
    }),
    githubSynced: t.field({
      type: "Date",
      resolve: (obj) => obj.githubSynced as string,
    }),
    links: t.stringList({
      resolve: (obj) => obj.links as string[],
    }),
    notifications: t.field({
      type: [DatasetEventRef],
      resolve: async (obj, _args, { userInfo }) => {
        const userId = obj.id as string

        // Reviewers never have notifications
        if (userInfo?.reviewer) {
          return []
        }

        // Authorization
        if (!userInfo || (userInfo.id !== userId && !userInfo.admin)) {
          throw new Error("Not authorized to view these notifications.")
        }

        // Get user and orcid
        const currentUser = await User.findOne({ id: userId }).exec()
        const orcid = currentUser?.orcid

        // Base match conditions: either the user created it OR it targets them
        const matchConditions: Record<string, unknown>[] = [
          { userId },
          { "event.targetUserId": userId },
        ]
        if (orcid) matchConditions.push({ "event.targetUserId": orcid })

        const pipeline: PipelineStage[] = [
          { $match: { $or: matchConditions } },
          {
            $lookup: {
              from: "permissions",
              let: { datasetId: "$datasetId", currentUserId: userId },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ["$datasetId", "$$datasetId"] },
                        { $eq: ["$userId", "$$currentUserId"] },
                      ],
                    },
                  },
                },
              ],
              as: "permissions",
            },
          },
          {
            $unwind: { path: "$permissions", preserveNullAndEmptyArrays: true },
          },
          { $sort: { timestamp: -1 } },
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "id",
              as: "user",
            },
          },
          {
            $unwind: { path: "$user", preserveNullAndEmptyArrays: true },
          },
          {
            $lookup: {
              from: "usernotificationstatuses",
              let: { eventId: "$id" },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ["$datasetEventId", "$$eventId"] },
                        { $eq: ["$userId", userId] },
                      ],
                    },
                  },
                },
              ],
              as: "notificationStatus",
            },
          },
          {
            $unwind: {
              path: "$notificationStatus",
              preserveNullAndEmptyArrays: true,
            },
          },
        ]

        const events = await DatasetEvent.aggregate(pipeline).exec()

        // Apply visibility rules
        const filtered = events.filter((ev) => {
          if (!ev.event || !ev.event.type) return false

          const type = ev.event.type
          const targetId = ev.event.targetUserId
          const isDatasetAdmin = userInfo.admin ||
            ev.permissions?.level === "admin"
          const isTargetUser = targetId === userId ||
            (orcid && targetId === orcid)

          switch (type) {
            case "contributorRequest":
              return isDatasetAdmin
            case "contributorCitation":
              return isTargetUser
            case "contributorRequestResponse":
            case "contributorCitationResponse":
              return isDatasetAdmin || isTargetUser
            // Reduce the notification noise by hiding non-actionable events
            case "created":
            case "versioned":
            case "deleted":
            case "published":
            case "permissionChange":
            case "git":
            case "upload":
              return false
            default:
              return isDatasetAdmin
          }
        })

        // Map results with notification status
        return filtered.map((event) => {
          const notificationStatus = event.notificationStatus
            ? event.notificationStatus
            : ({ status: "UNREAD" } as UserNotificationStatusDocument)

          return { ...event, notificationStatus }
        })
      },
    }),
    orcidConsent: t.boolean({
      resolve: (obj) => obj.orcidConsent as boolean,
    }),
  }),
})

export const UserList = builder.simpleObject("UserList", {
  fields: (t) => ({
    users: t.field({ type: [UserRef], nullable: false }),
    totalCount: t.int({ nullable: false }),
  }),
})
