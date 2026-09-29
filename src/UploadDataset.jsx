
import { useState } from 'react'

function UploadDataset({ onBack }) {
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

  function handleFileChange(event) {
    const selectedFile = event.target.files[0]

    setError('')
    setSuccess('')
    setFile(null)

    if (!selectedFile) return

    if (!selectedFile.name.toLowerCase().endsWith('.csv')) {
      setError('Please select a CSV file.')
      event.target.value = ''
      return
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError('File size must be 10 MB or less.')
      event.target.value = ''
      return
    }

    setFile(selectedFile)
  }

  function handleUpload(event) {
    event.preventDefault()

    if (!file) {
      setError('Please choose a CSV file first.')
      return
    }

    setError('')
    setSuccess(`"${file.name}" is ready for upload.`)
  }

  return (
    <div className="upload-page">
      <header className="upload-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Dashboard
        </button>
      </header>

      <main className="upload-container">
        <div className="upload-heading">
          <h1>Upload Dataset</h1>
          <p>
            Import a CSV file to begin duplicate detection and data
            quality analysis.
          </p>
        </div>

        <form className="upload-card" onSubmit={handleUpload}>
          <div className="upload-icon">⇧</div>

          <h2>Choose your dataset</h2>
          <p className="upload-description">
            Select a CSV file from your computer.
          </p>

          <label className="file-picker">
            Choose CSV File
            <input
              type="file"
              accept=".csv,text/csv"
              onChange={handleFileChange}
            />
          </label>

          <p className="file-hint">CSV format · Maximum file size: 10 MB</p>

          {file && (
            <div className="selected-file">
              <span>▤</span>
              <div>
                <strong>{file.name}</strong>
                <p>{(file.size / 1024).toFixed(1)} KB</p>
              </div>
            </div>
          )}

          {error && <p className="upload-error">{error}</p>}
          {success && <p className="upload-success">{success}</p>}

          <button
            type="submit"
            className="upload-submit"
            disabled={!file}
          >
            Upload Dataset
          </button>
        </form>
      </main>
    </div>
  )
}

export default UploadDataset