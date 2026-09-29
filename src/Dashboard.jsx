
import './Dashboard.css'
import UploadDataset from './UploadDataset'
import { useState } from 'react'
import MyDatasets from './MyDatasets'
import DuplicateDetection from './DuplicateDetection'
import MergeDiagnostics from './MergeDiagnostics'
import SafeDataMerge from './SafeDataMerge'
import MergeResults from './MergeResults'
import ProcessingHistory from './ProcessingHistory'
function Dashboard({ onLogout }) {
  const [showDiagnostics, setShowDiagnostics] = useState(false)
  const [showDetection, setShowDetection] = useState(false)
  const [showUpload, setShowUpload] = useState(false)
  const [showDatasets, setShowDatasets] = useState(false)
  const [showMerge, setShowMerge] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  if (showUpload) {
  return <UploadDataset onBack={() => setShowUpload(false)} />
}
if (showDiagnostics) {
  return (
    <MergeDiagnostics
      onBack={() => setShowDiagnostics(false)}
      onMerge={() => {
        setShowDiagnostics(false)
        setShowMerge(true)
      }}
    />
  )
}
if (showHistory) {
  return (
    <ProcessingHistory
      onBack={() => setShowHistory(false)}
    />
  )
}
if (showMerge) {
  return (
    <SafeDataMerge
      onBack={() => setShowMerge(false)}
      onResults={() => {
        setShowMerge(false)
        setShowResults(true)
      }}
    />
  )
}

if (showResults) {
  return (
    <MergeResults
      onBack={() => {
        setShowResults(false)
        setShowMerge(true)
      }}
    />
  )
}
if (showDatasets) {
  return (
    <MyDatasets
      onBack={() => setShowDatasets(false)}
      onDetect={() => {
        setShowDatasets(false)
        setShowDetection(true)
      }}
    />
  )
}
if (showDetection) {
  return (
    <DuplicateDetection
      onBack={() => setShowDetection(false)}
      onReview={(group) =>
        alert(`Reviewing duplicate group ${group.id}`)
      }
    />
  )
}
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="dashboard-brand">
          <span className="brand-icon">▤</span>
          Duplicate<span>Safe</span>
        </div>

        <p className="nav-title">MAIN MENU</p>

        <nav className="sidebar-nav">
          <a href="#dashboard" className="nav-link active">
            <span>▦</span> Dashboard
          </a>

            <a
                href="#datasets"
                className="nav-link"
                onClick={(e) => {
                e.preventDefault()
                setShowDatasets(true)
                }}
            >
            <span>▤</span> My Datasets
          </a>

          <a
              href="#duplicates"
              className="nav-link"
              onClick={(e) => {
              e.preventDefault()
              setShowDetection(true)
            }}
>
            <span>⌕</span> Duplicate Detection
          </a>
            <a
                href="#diagnostics"
                className="nav-link"
                onClick={(e) => {
                e.preventDefault()
                setShowDiagnostics(true)
            }}
>
  <span>⚙</span> Merge Diagnostics
</a>
          <a
  href="#merge"
  className="nav-link"
  onClick={(e) => {
    e.preventDefault()
    setShowMerge(true)
  }}
>
  <span>⇄</span> Safe Data Merge
</a>

          <a
  href="#history"
  className="nav-link"
  onClick={(e) => {
    e.preventDefault()
    setShowHistory(true)
  }}
>
  <span>◷</span> Processing History
</a>
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-link logout-btn" onClick={onLogout}>
            <span>↪</span> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Monitor and manage your data quality.</p>
          </div>

          <div className="profile">
            <div className="profile-avatar">U</div>
            <div>
              <strong>User</strong>
              <p>Data Manager</p>
            </div>
          </div>
        </header>

        {/* Statistics */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue">▤</div>
            <p>Total Datasets</p>
            <h2>0</h2>
            <span>Uploaded datasets</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">⌕</div>
            <p>Duplicates Detected</p>
            <h2>0</h2>
            <span>Matching records found</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✓</div>
            <p>Records Repaired</p>
            <h2>0</h2>
            <span>Duplicates resolved</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">⇄</div>
            <p>Safe Merges</p>
            <h2>0</h2>
            <span>Validated merge operations</span>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="dashboard-section">
          <h2>Quick Actions</h2>
          <p className="section-description">
            Start processing your datasets.
          </p>

          <div className="action-grid">
            <a
                href="#upload"
                className="action-card"
                onClick={(e) => {
                e.preventDefault()
                setShowUpload(true)
            }}
>
              <span className="action-icon">＋</span>
              <div>
                <h3>Upload Dataset</h3>
                <p>Import a CSV file</p>
              </div>
              <span className="action-arrow">→</span>
            </a>

            <a
                href="#duplicates"
                className="action-card"
                onClick={(e) => {
                e.preventDefault()
                setShowDetection(true)
            }}
>
              <span className="action-icon">⌕</span>
              <div>
                <h3>Detect Duplicates</h3>
                <p>Find matching records</p>
              </div>
              <span className="action-arrow">→</span>
            </a>

            <a
  href="#merge"
  className="action-card"
  onClick={(e) => {
    e.preventDefault()
    setShowMerge(true)
  }}
>
              <span className="action-icon">⇄</span>
              <div>
                <h3>Safe Data Merge</h3>
                <p>Merge and validate data</p>
              </div>
              <span className="action-arrow">→</span>
            </a>
          </div>
        </section>

        {/* Recent Datasets */}
        <section className="dashboard-section recent-section">
          <div className="section-heading">
            <div>
              <h2>Recent Datasets</h2>
              <p className="section-description">
                Your recently uploaded files.
              </p>
            </div>

            <a
                href="#datasets"
                className="view-all"
                onClick={(e) => {
                e.preventDefault()
                setShowDatasets(true)
              }}
            >
              View All →
            </a>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Dataset Name</th>
                  <th>Records</th>
                  <th>Duplicates</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="4" className="empty-state">
                    <div className="empty-icon">▤</div>
                    <strong>No datasets uploaded yet</strong>
                    <p>Upload a CSV file to get started.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard