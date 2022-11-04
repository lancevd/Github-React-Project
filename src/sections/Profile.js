import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='profile '>
        <div id='profile-pic'>
            <img src='' alt='' />
        </div>
        <div id='user-details' className='display-flex align-items-center'>
          <h5 id='dev-name' className='mt-2 mb-2'>John Doe</h5>
          <p>@username </p>
          <div id='follow-info'>
            <p> <span>6 Following</span> | <span>9 Followers</span></p>
          </div>
        </div>
        <Link to='repositories'>
          <button className='btn btn-default' >Show GitHub Profile</button>
        </Link> 

    </div>
  )
}

export default Profile