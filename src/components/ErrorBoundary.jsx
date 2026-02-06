import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <div className="error-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h1>Something went wrong</h1>
            <p>We apologize for the inconvenience. Please try refreshing the page.</p>
            <button 
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
          <style>{`
            .error-boundary {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: var(--color-bg-primary, #0f172a);
              padding: 2rem;
            }
            .error-content {
              text-align: center;
              max-width: 400px;
            }
            .error-icon {
              color: var(--color-primary, #f97316);
              margin-bottom: 1.5rem;
            }
            .error-content h1 {
              color: var(--color-text, #f8fafc);
              margin-bottom: 1rem;
              font-size: 1.75rem;
            }
            .error-content p {
              color: var(--color-text-muted, #94a3b8);
              margin-bottom: 2rem;
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
