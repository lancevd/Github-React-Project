import React, { useEffect, useState } from 'react'
import RepoCardAbout from '../components/RepoCardAbout';
import RepoCardFiles from '../components/RepoCardFiles';
import StatBoxes from '../components/StatBoxes'

const RepoDetails = () => {
  let location = window.location.search;
  const [repoContent, setRepoContent] = useState([])

  let params = new URLSearchParams(location);
  const videoID = params.get('watchid')
  const repoName = params.get('name')

  useEffect(() =>{
    const fetchRepos = async () =>{
        const results = await fetch(`https://api.github.com/repos/lancevd/${repoName}/contents`)
        results.json().then(data => {
        // console.log(data)
        setRepoContent(data)
        }
    )}  
    fetchRepos()
},[])

// console.log(repoContent)
  return (
    <div className='repo-details container'>
      <h1>{repoName}</h1>
      <StatBoxes/>
      <h3 className='mb-3'>Repository Details</h3>
      <div className='row container'>
        <RepoCardFiles />
        <RepoCardAbout />
      </div>
    </div>
  )
}

export default RepoDetails