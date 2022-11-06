import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [profile, setProfile] = useState([])
  useEffect(() =>{
    const fetchRepos = async () =>{
        const results = await fetch(`https://api.github.com/users/lancevd`)
        results.json().then(data => {
        // console.log(data)
        setProfile(data)
        }
    )}  
    fetchRepos()
},[])

  return (
    <div className='profile '>
        <div id='profile-pic'>
            <img src={`${profile.avatar_url}`} alt='Olamide Winner Picture' />
        </div>
        <div id='user-details' className='display-flex align-items-center'>
          <h5 id='dev-name' className='mt-2 mb-2'>{profile.name}</h5>
          <p>@{!profile.login ? '' : profile.login} </p>
          <div id='follow-info'>
            <p> <span>{profile.following} Following</span> | <span>{profile.followers} Followers</span></p>
          </div>
        </div>
        <Link to='repositories'>
          <button className='btn btn-default mb-2' >Show Repositories</button>
        </Link> 
        <Link to='/'>
          <button className='btn btn-default' >Go Home</button>
        </Link> 

    </div>
  )
}

export default Profile