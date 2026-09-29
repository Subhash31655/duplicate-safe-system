import { useState } from 'react'

function SafeDataMerge({ onBack, onResults }) {
  const [mergeStatus, setMergeStatus] = useState('ready')

  const validationChecks = [
    {
      name: 'Duplicate group identified',
      status: 'Passed',
    },
    {
      name: 'Required fields validated',
      status: 'Passed',
    },
    {
      name: 'Conflicting values reviewed',
      status: 'Passed',
    },
    {
      name: 'Repair recommendation approved',
      status: 'Passed',
    },
    {
      name: 'Data integrity check',
      status: 'Passed',
    },
  ]

  function performMerge() {
    setMergeStatus('completed')
  }

  return (
    <div className="module-page">
      {/* Header */}
      <div className="module-header">
        <button className="back-button" onClick={onBack}>
          ← Merge Diagnostics
        </button>

        <div>
          <h1>Safe Data Merge</h1>
          <p>
            Review validation results before safely merging duplicate records.
          </p>
        </div>
      </div>

      {/* Merge Summary */}
      <div className="detection-summary">
        <div className="summary-card">
          <span>Dataset</span>
          <strong>customers.csv</strong>
        </div>

        <div className="summary-card">
          <span>Duplicate Group</span>
          <strong>DG-001</strong>
        </div>

        <div className="summary-card">
          <span>Records to Merge</span>
          <strong>2</strong>
        </div>

        <div className="summary-card">
          <span>Merge Status</span>
          <strong>
            {mergeStatus === 'completed' ? 'Completed' : 'Ready'}
          </strong>
        </div>
      </div>

      {/* Validation */}
      <div className="dataset-card">
        <div className="dataset-title">
          <div>
            <h2>Pre-Merge Validation</h2>
            <p className="table-subtitle">
              Checks performed before applying the merge.
            </p>
          </div>

          <span className="completed-badge">
            ✓ Validation Passed
          </span>
        </div>

        <div className="validation-list">
          {validationChecks.map((check, index) => (
            <div className="validation-item" key={index}>
              <div className="validation-check">✓</div>

              <div>
                <strong>{check.name}</strong>
                <p>Validation check completed successfully.</p>
              </div>

              <span className="validation-status">
                {check.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Merge Preview */}
      <div className="dataset-card merge-preview-card">
        <div className="dataset-title">
          <div>
            <h2>Merge Preview</h2>
            <p className="table-subtitle">
              Preview of the record that will be retained.
            </p>
          </div>
        </div>

        <table className="dataset-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Record A</th>
              <th>Record B</th>
              <th>Final Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Name</td>
              <td>Rahul Kumar</td>
              <td>Rahul K.</td>
              <td>
                <strong>Rahul Kumar</strong>
              </td>
            </tr>

            <tr>
              <td>Email</td>
              <td>rahul@gmail.com</td>
              <td>rahul@gmail.com</td>
              <td>
                <strong>rahul@gmail.com</strong>
              </td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>9876543210</td>
              <td>9876543210</td>
              <td>
                <strong>9876543210</strong>
              </td>
            </tr>

            <tr>
              <td>City</td>
              <td>Vijayawada</td>
              <td>Vijayawada</td>
              <td>
                <strong>Vijayawada</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Merge Result */}
      {mergeStatus === 'completed' && (
        <div className="merge-success">
          <div className="merge-success-icon">✓</div>

          <div>
            <h3>Safe merge completed successfully</h3>
            <p>
              The duplicate records were validated and merged into a
              single master record.
            </p>
          </div>
        </div>
      )}

      {/* Action */}
      <div className="merge-action-section">
        {mergeStatus === 'ready' ? (
          <>
            <button
              className="perform-merge-button"
              onClick={performMerge}
            >
              ✓ Perform Safe Merge
            </button>

            <p>
              The merge will only be performed after all validation
              checks have passed.
            </p>
          </>
        ) : (
          <button
            className="view-results-button"
            onClick={onResults}
          >
            View Merge Results →
          </button>
        )}
      </div>
    </div>
  )
}

export default SafeDataMerge