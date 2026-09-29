function ProcessingHistory({ onBack }) {
  const history = [
    {
      id: 'JOB-001',
      dataset: 'customers.csv',
      records: 1250,
      duplicates: 32,
      merged: 32,
      status: 'Completed',
      date: '22 Sep 2026',
      time: '10:42 AM',
    },
    {
      id: 'JOB-002',
      dataset: 'employees.csv',
      records: 850,
      duplicates: 18,
      merged: 18,
      status: 'Completed',
      date: '21 Sep 2026',
      time: '03:15 PM',
    },
    {
      id: 'JOB-003',
      dataset: 'students.csv',
      records: 2100,
      duplicates: 45,
      merged: 0,
      status: 'Pending',
      date: '20 Sep 2026',
      time: '11:30 AM',
    },
  ]

  return (
    <div className="module-page">

      {/* Header */}
      <div className="module-header">

        <button className="back-button" onClick={onBack}>
          ← Dashboard
        </button>

        <div>
          <h1>Processing History</h1>
          <p>
            View previous duplicate detection and data merge operations.
          </p>
        </div>

      </div>

      {/* Summary Cards */}
      <div className="detection-summary">

        <div className="summary-card">
          <span>Total Jobs</span>
          <strong>3</strong>
        </div>

        <div className="summary-card">
          <span>Completed</span>
          <strong>2</strong>
        </div>

        <div className="summary-card">
          <span>Records Processed</span>
          <strong>4,200</strong>
        </div>

        <div className="summary-card">
          <span>Duplicates Resolved</span>
          <strong>50</strong>
        </div>

      </div>

      {/* Processing History Table */}
      <div className="dataset-card">

        <div className="dataset-title">
          <div>
            <h2>Processing Jobs</h2>
            <p className="table-subtitle">
              History of dataset processing and safe merge operations.
            </p>
          </div>
        </div>

        <div className="history-table-wrapper">

          <table className="dataset-table">

            <thead>
              <tr>
                <th>Job ID</th>
                <th>Dataset</th>
                <th>Records</th>
                <th>Duplicates</th>
                <th>Merged</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              {history.map((job) => (
                <tr key={job.id}>

                  <td>
                    <strong>{job.id}</strong>
                  </td>

                  <td>{job.dataset}</td>

                  <td>{job.records}</td>

                  <td>{job.duplicates}</td>

                  <td>{job.merged}</td>

                  <td>
                    <span
                      className={`status ${
                        job.status.toLowerCase()
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>

                  <td>
                    <div className="history-date">
                      <strong>{job.date}</strong>
                      <span>{job.time}</span>
                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Processing Flow */}
      <div className="dataset-card">

        <h2>Processing Workflow</h2>

        <p className="table-subtitle">
          Each processing job follows the same data quality workflow.
        </p>

        <div className="history-flow">

          <div className="history-step">
            <div className="history-step-number">1</div>
            <strong>Upload</strong>
            <span>Dataset received</span>
          </div>

          <div className="history-arrow">→</div>

          <div className="history-step">
            <div className="history-step-number">2</div>
            <strong>Detection</strong>
            <span>Find duplicates</span>
          </div>

          <div className="history-arrow">→</div>

          <div className="history-step">
            <div className="history-step-number">3</div>
            <strong>Diagnostics</strong>
            <span>Analyze conflicts</span>
          </div>

          <div className="history-arrow">→</div>

          <div className="history-step">
            <div className="history-step-number">4</div>
            <strong>Repair</strong>
            <span>Resolve conflicts</span>
          </div>

          <div className="history-arrow">→</div>

          <div className="history-step">
            <div className="history-step-number">5</div>
            <strong>Merge</strong>
            <span>Validate & merge</span>
          </div>

        </div>

      </div>

      <div className="detection-footer">
        Showing sample processing history for the frontend demonstration.
      </div>

    </div>
  )
}

export default ProcessingHistory