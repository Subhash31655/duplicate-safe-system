function DuplicateDetection({ onBack, onReview }) {
  const duplicateGroups = [
    {
      id: 'DG-001',
      records: 3,
      similarity: '98%',
      field: 'Email + Phone',
      status: 'High Match',
    },
    {
      id: 'DG-002',
      records: 2,
      similarity: '94%',
      field: 'Name + Email',
      status: 'High Match',
    },
    {
      id: 'DG-003',
      records: 2,
      similarity: '87%',
      field: 'Name + Phone',
      status: 'Review',
    },
  ]

  const records = [
    {
      id: 1024,
      name: 'Rahul Kumar',
      email: 'rahul@gmail.com',
      phone: '9876543210',
      similarity: '98%',
    },
    {
      id: 1187,
      name: 'Rahul K.',
      email: 'rahul@gmail.com',
      phone: '9876543210',
      similarity: '95%',
    },
    {
      id: 2045,
      name: 'Priya Sharma',
      email: 'priya@gmail.com',
      phone: '9123456780',
      similarity: '91%',
    },
  ]

  return (
    <div className="module-page">
      {/* Header */}
      <div className="module-header">
        <button className="back-button" onClick={onBack}>
          ← My Datasets
        </button>

        <div>
          <h1>Duplicate Detection</h1>
          <p>
            Identify potentially duplicate records in your dataset.
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
          <span>Total Records</span>
          <strong>1,250</strong>
        </div>

        <div className="summary-card">
          <span>Potential Duplicates</span>
          <strong>32</strong>
        </div>

        <div className="summary-card">
          <span>Duplicate Groups</span>
          <strong>12</strong>
        </div>
      </div>

      {/* Detection Status */}
      <div className="detection-status">
        <div>
          <strong>Detection completed</strong>
          <p>
            Matching records were identified using similarity-based
            comparison.
          </p>
        </div>

        <span className="completed-badge">✓ Completed</span>
      </div>

      {/* Duplicate Groups */}
      <div className="dataset-card">
        <div className="dataset-title">
          <div>
            <h2>Duplicate Groups</h2>
            <p className="table-subtitle">
              Groups of records that may represent the same entity.
            </p>
          </div>
        </div>

        <table className="dataset-table">
          <thead>
            <tr>
              <th>Group ID</th>
              <th>Records</th>
              <th>Matching Fields</th>
              <th>Similarity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {duplicateGroups.map((group) => (
              <tr key={group.id}>
                <td>
                  <strong>{group.id}</strong>
                </td>
                <td>{group.records}</td>
                <td>{group.field}</td>
                <td>
                  <strong>{group.similarity}</strong>
                </td>
                <td>
                  <span
                    className={
                      group.status === 'Review'
                        ? 'match-badge review'
                        : 'match-badge'
                    }
                  >
                    {group.status}
                  </span>
                </td>
                <td>
                  <button
                    className="action-btn"
                    onClick={() => onReview(group)}
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sample Records */}
      <div className="dataset-card detection-records">
        <div className="dataset-title">
          <div>
            <h2>Detected Matching Records</h2>
            <p className="table-subtitle">
              Sample records identified as potential duplicates.
            </p>
          </div>
        </div>

        <table className="dataset-table">
          <thead>
            <tr>
              <th>Record ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Similarity</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>
                  <span className="similarity-score">
                    {record.similarity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="detection-footer">
        <p>
          Showing sample detection results for the frontend demonstration.
        </p>
      </div>
    </div>
  )
}

export default DuplicateDetection