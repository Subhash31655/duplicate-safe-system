import { useState } from 'react'

function MergeDiagnostics({ onBack, onMerge }) {
  const [repairStatus, setRepairStatus] = useState('pending')

  function acceptRepair() {
    setRepairStatus('accepted')
  }

  function reviewManually() {
    setRepairStatus('review')
  }

  return (
    <div className="module-page">
      {/* Header */}
      <div className="module-header">
        <button className="back-button" onClick={onBack}>
          ← Duplicate Detection
        </button>

        <div>
          <h1>Merge Diagnostics</h1>
          <p>
            Analyze duplicate records and identify potential data conflicts
            before merging.
          </p>
        </div>
      </div>

      {/* Dataset Information */}
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
          <span>Records Compared</span>
          <strong>3</strong>
        </div>

        <div className="summary-card">
          <span>Similarity</span>
          <strong>98%</strong>
        </div>
      </div>

      {/* Diagnostic Status */}
      <div className="diagnostic-status">
        <div>
          <strong>Diagnostic analysis completed</strong>
          <p>
            The system compared the duplicate records and identified
            matching and conflicting fields.
          </p>
        </div>

        <span className="completed-badge">✓ Analyzed</span>
      </div>

      {/* Record Comparison */}
      <div className="dataset-card">
        <div className="dataset-title">
          <div>
            <h2>Record Comparison</h2>
            <p className="table-subtitle">
              Compare values before applying a merge operation.
            </p>
          </div>
        </div>

        <div className="comparison-grid">
          <div className="record-panel">
            <div className="record-header">
              <span>Record A</span>
              <strong>ID: 1024</strong>
            </div>

            <div className="record-field">
              <span>Name</span>
              <strong>Rahul Kumar</strong>
            </div>

            <div className="record-field">
              <span>Email</span>
              <strong>rahul@gmail.com</strong>
            </div>

            <div className="record-field">
              <span>Phone</span>
              <strong>9876543210</strong>
            </div>

            <div className="record-field">
              <span>City</span>
              <strong>Vijayawada</strong>
            </div>
          </div>

          <div className="record-panel">
            <div className="record-header">
              <span>Record B</span>
              <strong>ID: 1187</strong>
            </div>

            <div className="record-field conflict">
              <span>Name</span>
              <strong>Rahul K.</strong>
            </div>

            <div className="record-field">
              <span>Email</span>
              <strong>rahul@gmail.com</strong>
            </div>

            <div className="record-field">
              <span>Phone</span>
              <strong>9876543210</strong>
            </div>

            <div className="record-field conflict">
              <span>City</span>
              <strong>Vijayawada</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Diagnostics */}
      <div className="dataset-card diagnostics-card">
        <div className="dataset-title">
          <div>
            <h2>Detected Issues</h2>
            <p className="table-subtitle">
              Fields requiring attention before the merge.
            </p>
          </div>
        </div>

        <div className="diagnostic-list">
          <div className="diagnostic-item match">
            <span className="diagnostic-icon">✓</span>
            <div>
              <strong>Email matches</strong>
              <p>
                Both records contain the same email address.
              </p>
            </div>
            <span className="diagnostic-label">Match</span>
          </div>

          <div className="diagnostic-item match">
            <span className="diagnostic-icon">✓</span>
            <div>
              <strong>Phone matches</strong>
              <p>
                Both records contain the same phone number.
              </p>
            </div>
            <span className="diagnostic-label">Match</span>
          </div>

          <div className="diagnostic-item warning">
            <span className="diagnostic-icon">!</span>
            <div>
              <strong>Name variation detected</strong>
              <p>
                "Rahul Kumar" and "Rahul K." appear to represent the
                same person.
              </p>
            </div>
            <span className="diagnostic-label">Review</span>
          </div>
        </div>
      </div>

      {/* Repair Recommendation */}
      <div className="dataset-card repair-card">
        <div className="repair-heading">
          <div>
            <h2>Recommended Repair</h2>
            <p className="table-subtitle">
              Suggested value based on the available records.
            </p>
          </div>

          <span className="recommendation-badge">
            Recommended
          </span>
        </div>

        <div className="repair-comparison">
          <div>
            <span>Current values</span>
            <strong>Rahul Kumar / Rahul K.</strong>
          </div>

          <span className="repair-arrow">→</span>

          <div className="recommended-value">
            <span>Proposed value</span>
            <strong>Rahul Kumar</strong>
          </div>
        </div>

        {repairStatus === 'accepted' && (
          <div className="repair-message success">
            ✓ Repair accepted. The record is ready for safe merging.
          </div>
        )}

        {repairStatus === 'review' && (
          <div className="repair-message warning">
            ⚠ Manual review selected. The merge should be reviewed
            before proceeding.
          </div>
        )}

        <div className="repair-actions">
          <button
            className="primary-action"
            onClick={acceptRepair}
          >
            Accept Repair
          </button>

          <button
            className="secondary-action"
            onClick={reviewManually}
          >
            Review Manually
          </button>
        </div>
      </div>

      {/* Continue */}
      <div className="continue-section">
        <button
          className="merge-next-button"
          onClick={onMerge}
          disabled={repairStatus !== 'accepted'}
        >
          Continue to Safe Data Merge →
        </button>

        {repairStatus !== 'accepted' && (
          <p>Accept the recommended repair to continue.</p>
        )}
      </div>
    </div>
  )
}

export default MergeDiagnostics