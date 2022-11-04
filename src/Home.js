import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
        <h1>Welcome to Olamide's Profile</h1>
        <div></div>
        <Link to='account/repositories'>
          <button className='btn btn-default'>Show GitHub Profile</button>
        </Link>
    </div>
  )
}

export default Home