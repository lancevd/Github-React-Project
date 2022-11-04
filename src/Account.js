import React from 'react'
import { Routes, Route } from 'react-router'
import Output from './sections/Output'
import Profile from './sections/Profile'
import RepoDetails from './sections/RepoDetails'

const Account = () => {
  return (
    <div className='account'>
        < Profile/>
        <Routes>
          <Route path='repositories' element={<Output />} />
          <Route path='details' element={< RepoDetails/>}/>
        </Routes>
    </div>
  )
}

export default Account