import React from 'react'
import { Link } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'

const ErrorBoundaryTestPage = () => {
  return (
    <ErrorBoundary>
        <div className='error'>
            <ErrorComponent />
            <h1>Error Page</h1>
            <h6>This is an Error Page</h6>
            <div className='error-btns'>
                <Link to='/'><button>Go Home</button></Link>
            </div>
        </div>
    </ErrorBoundary>
  )
}

const ErrorComponent =() => {
 throw new Error()
}

export default ErrorBoundaryTestPage