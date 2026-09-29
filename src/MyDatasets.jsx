function MyDatasets({ onBack, onDetect }) {
  const datasets = [
    {
      id: 1,
      name: 'customers.csv',
      records: 1250,
      duplicates: 32,
      status: 'Ready',
      uploaded: '22 Sep 2026',
    },
    {
      id: 2,
      name: 'employees.csv',
      records: 850,
      duplicates: 18,
      status: 'Processed',
      uploaded: '21 Sep 2026',
    },
    {
      id: 3,
      name: 'students.csv',
      records: 2100,
      duplicates: 45,
      status: 'Pending',
      uploaded: '20 Sep 2026',
    },
  ]

  return (
    <div className="module-page">
      <div className="module-header">
        <button className="back-button" onClick={onBack}>
          ← Dashboard
        </button>

        <div>
          <h1>My Datasets</h1>
          <p>Manage and review uploaded datasets.</p>
        </div>
      </div>

      <div className="dataset-card">
        <div className="dataset-title">
          <h2>Available Datasets</h2>
          <button className="upload-new">+ Upload New</button>
        </div>

        <table className="dataset-table">
          <thead>
            <tr>
              <th>Dataset</th>
              <th>Records</th>
              <th>Duplicates</th>
              <th>Status</th>
              <th>Uploaded</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {datasets.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.records}</td>
                <td>{data.duplicates}</td>
                <td>
                  <span className={`status ${data.status.toLowerCase()}`}>
                    {data.status}
                  </span>
                </td>
                <td>{data.uploaded}</td>
                <td>
                  <button
                    className="action-btn"
                    onClick={onDetect}
                  >
                    View / Detect
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyDatasets