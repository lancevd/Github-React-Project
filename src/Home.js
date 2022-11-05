import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'

const Home = () => {
  return (
    <div className='Home'>
      <Helmet>
          <title>GitHub Site | Home</title>
          <meta charSet = 'utf-8' />
          <meta name="description" content="Olamide Winner Mosobalaje's Github project, showcasing GitHub Rest API for users, repositories, commits, etc" />
      </Helmet>

        <h1 className="text-center">Welcome to Olamide's Profile</h1>
        <div></div>
        <Link to='account/repositories'>
          <button className='btn btn-default'>Show GitHub Profile</button>
        </Link>
    </div>
  )
}

export default Home