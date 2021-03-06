import mockingoose from 'mockingoose'
import request from 'superagent'
import { createDataset } from '../dataset.js'
import { createSnapshot } from '../snapshots.js'
import config from '../../config.js'

// Mock requests to Datalad service
jest.mock('superagent')
jest.mock('../../libs/redis.js')
// Mock draft files calls
jest.mock('../draft.js')

describe('snapshot model operations', () => {
  describe('createSnapshot()', () => {
    beforeEach(() => {
      mockingoose.resetAll()
      // Setup a default sequence value to return for each test
      mockingoose.Counter.toReturn(
        { _id: 'dataset', sequence_value: 1 },
        'findOneAndUpdate',
      )
    })
    it('posts to the DataLad /datasets/{dsId}/snapshots/{snapshot} endpoint', async done => {
      const tag = 'snapshot'
      const dsId = await createDataset()
      // Reset call count for request.post
      request.post.mockClear()
      request.__setMockResponse({ body: {} })
      await createSnapshot(dsId, tag, false)
      expect(request.post).toHaveBeenCalledTimes(1)
      expect(request.post).toHaveBeenCalledWith(
        expect.stringContaining(
          `${config.datalad.uri}/datasets/${dsId}/snapshots/${tag}`,
        ),
      )
      done()
    })
    it('throws an exception if backend errors', async done => {
      const tag = 'snapshot'
      const dsId = await createDataset()
      // Reset call count for request.post
      request.post.mockClear()
      request.__setMockError({ error: 'something went wrong' })
      try {
        await createSnapshot(dsId, tag, false)
        done.fail(new Error('Failed request did not throw exception'))
      } catch (e) {
        expect(request.post).toHaveBeenCalledTimes(1)
        done()
      }
    })
  })
})
