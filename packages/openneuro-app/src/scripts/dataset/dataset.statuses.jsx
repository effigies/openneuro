// This is a legacy version of datalad/dashboard/datasets/dataset-statuses.jsx
// TODO - Remove this after dataset page refactor
import React from 'react'
import PropTypes from 'prop-types'
import Status from '../common/partials/status.jsx'

class Statuses extends React.Component {
  constructor() {
    super()
  }

  // life cycle events --------------------------------------------------

  render() {
    const uploading = false
    let dataset = this.props.dataset,
      minimal = this.props.minimal,
      status = dataset.status,
      uploaderSubscribed = dataset.uploaderSubscribed

    return (
      <span className="status-wrap">
        <Status
          type="public"
          minimal={minimal}
          display={status.public || (status.hasPublic && minimal)}
        />
        <Status
          type="incomplete"
          minimal={minimal}
          display={status.incomplete && !uploading && minimal}
          dataset={dataset}
        />
        <Status type="shared" minimal={minimal} display={status.shared} />
        <Status type="inProgress" minimal={minimal} display={uploading} />
        <Status
          type="invalid"
          minimal={minimal}
          display={status.invalid && minimal}
        />
        <Status type="monitored" display={uploaderSubscribed} />
      </span>
    )
  }
}

Statuses.defaultProps = {
  minimal: false,
}

Statuses.propTypes = {
  dataset: PropTypes.object,
  minimal: PropTypes.bool,
}

export default Statuses
