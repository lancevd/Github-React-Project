import React from 'react'
import { Link } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary';
import {Helmet} from 'react-helmet'

const Error = () => {
  return (
    <ErrorBoundary>
        <Helmet>
          <title>GitHub Site | Error</title>
          <meta charSet = 'utf-8' />
          <meta name="description" content="This is the description of the page" />
        </Helmet>

      <div className='error'>
          <h1>Error 404</h1>
          <h6>We couldn't find that page. Check if the URL you entered is correct</h6>
          <div className='error-btns'>
            <Link to='/'><button>Go Home</button></Link>
            <Link to='/account/repositories'><button>View GitHub</button></Link>
          </div>
      </div>
      <img />
    </ErrorBoundary>
  )
}

export default Error