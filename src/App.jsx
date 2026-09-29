import Dashboard from './Dashboard'
import { useState } from 'react'
import './App.css'

function App() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  if (isLoggedIn) {
  return <Dashboard onLogout={() => setIsLoggedIn(false)} />
}
  return (
    <div className="auth-page">
      {/* Header */}
      <header className="auth-header">
        <a href="/" className="brand">
          <span className="brand-icon">▤</span>
          <span>
            Duplicate<span className="brand-blue">Safe</span>
          </span>
        </a>

        <div className="header-link">
          {isSignUp
            ? 'Already have an account?'
            : "Don't have an account?"}

          <button
            className="text-button"
            onClick={() => {
              setIsSignUp(!isSignUp)
              setShowPassword(false)
            }}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </header>

      {/* Authentication Card */}
      <main className="auth-main">
        <section className="auth-card">
          <div className="auth-heading">
            <h1>{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
            <p>
              {isSignUp
                ? 'Create your account to get started'
                : 'Sign in to access your account'}
            </p>
          </div>
          <form
  className="auth-form"
  onSubmit={(e) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }}
>
          
          
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="password-field">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  minLength={6}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? 'Hide password' : 'Show password'
                  }
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {isSignUp ? (
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            ) : (
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-button"
                  onClick={() =>
                    alert('Password recovery will be added later.')
                  }
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" className="submit-button">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="divider">
            <span></span>
            <p>or continue with</p>
            <span></span>
          </div>

          <div className="social-buttons">
            <button
              type="button"
              onClick={() => alert('Google login will be added later.')}
            >
              Google
            </button>

            <button
              type="button"
              onClick={() => alert('Microsoft login will be added later.')}
            >
              Microsoft
            </button>

            <button
              type="button"
              onClick={() => alert('GitHub login will be added later.')}
            >
              GitHub
            </button>
          </div>

          <p className="security-note">
            ♢ Your data is secure with us.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="auth-footer">
        © 2026 DuplicateSafe. All rights reserved.
      </footer>
    </div>
  )
}

export default App