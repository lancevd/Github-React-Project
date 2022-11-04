import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
        <h1>Error 404</h1>
        <Link to='/'><button>Go Home</button></Link>
        <Link to='/account/repositories'><button>View GitHub</button></Link>
    </div>
  )
}

export default Error