function MergeResults({ onBack }) {
  return (
    <div className="module-page">

      <div className="module-header">
        <button className="back-button" onClick={onBack}>
          ← Safe Data Merge
        </button>

        <div>
          <h1>Merge Results</h1>
          <p>Review the results of the completed safe data merge.</p>
        </div>
      </div>

      {/* Success Message */}
      <div className="merge-result-success">
        <div className="merge-result-icon">✓</div>

        <div>
          <h2>Merge Completed Successfully</h2>
          <p>
            Duplicate records were safely merged and the final dataset
            has been validated.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="detection-summary">

        <div className="summary-card">
          <span>Dataset</span>
          <strong>customers.csv</strong>
        </div>

        <div className="summary-card">
          <span>Records Before</span>
          <strong>1,250</strong>
        </div>

        <div className="summary-card">
          <span>Duplicates Merged</span>
          <strong>32</strong>
        </div>

        <div className="summary-card">
          <span>Final Records</span>
          <strong>1,218</strong>
        </div>

      </div>

      {/* Merge Details */}
      <div className="dataset-card">

        <div className="dataset-title">
          <div>
            <h2>Merge Summary</h2>
            <p className="table-subtitle">
              Summary of the records processed during the merge.
            </p>
          </div>
        </div>

        <div className="merge-result-details">

          <div className="result-detail-row">
            <span>Duplicate Groups Identified</span>
            <strong>12</strong>
          </div>

          <div className="result-detail-row">
            <span>Total Duplicate Records</span>
            <strong>32</strong>
          </div>

          <div className="result-detail-row">
            <span>Records Successfully Merged</span>
            <strong>32</strong>
          </div>

          <div className="result-detail-row">
            <span>Conflicting Values Resolved</span>
            <strong>8</strong>
          </div>

          <div className="result-detail-row">
            <span>Validation Status</span>
            <span className="status processed">
              ✓ Passed
            </span>
          </div>

        </div>

      </div>

      {/* Final Dataset Preview */}
      <div className="dataset-card">

        <h2>Final Dataset Preview</h2>

        <p className="table-subtitle">
          Sample records after duplicate resolution and safe merging.
        </p>

        <table className="dataset-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1024</td>
              <td>Rahul Kumar</td>
              <td>rahul@gmail.com</td>
              <td>9876543210</td>
              <td>Vijayawada</td>
              <td>
                <span className="status processed">
                  Merged
                </span>
              </td>
            </tr>

            <tr>
              <td>2045</td>
              <td>Priya Sharma</td>
              <td>priya@gmail.com</td>
              <td>9123456780</td>
              <td>Vijayawada</td>
              <td>
                <span className="status processed">
                  Validated
                </span>
              </td>
            </tr>

            <tr>
              <td>3012</td>
              <td>Arjun Reddy</td>
              <td>arjun@gmail.com</td>
              <td>9988776655</td>
              <td>Hyderabad</td>
              <td>
                <span className="status processed">
                  Validated
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

      <div className="detection-footer">
        Showing sample merge results for the frontend demonstration.
      </div>

    </div>
  )
}

export default MergeResults