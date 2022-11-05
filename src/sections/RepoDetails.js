import React, { useEffect, useState } from 'react'
import RepoCardAbout from '../components/RepoCardAbout';
import RepoCardFiles from '../components/RepoCardFiles';
import StatBoxes from '../components/StatBoxes'
import {Helmet} from 'react-helmet'

const RepoDetails = () => {
  let location = window.location.search;
  const [repoContent, setRepoContent] = useState([])

  let params = new URLSearchParams(location);
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
      <Helmet>
          <title>{repoName} | Olamide Mosobalaje</title>
          <meta charSet = 'utf-8' />
          <meta name="description" content="Olamide Winner Mosobalaje's Github repositories" />
        </Helmet>
      <h1>{repoName}</h1>
      <StatBoxes/>
      <h3 className='mb-3'>Repository Details</h3>
      <div className='repo-details-grid container'>
        <RepoCardFiles />
        <RepoCardAbout />
      </div>
    </div>
  )
}

export default RepoDetails