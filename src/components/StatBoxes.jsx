import React, { useEffect, useState } from 'react'
import StatBox from './StatBox'

// Contributors
// Tags
// Commits
// Topics
// Languages

const StatBoxes = () => {
  let location = window.location.search;
  const [repoContributors, setRepoContributors] = useState([])
  const [repoTags, setRepoTags] = useState([])
  const [repoCommits, setRepoCommits] = useState([])
  const [repoTopics, setRepoTopics] = useState([])
  const [repoLanguages, setRepoLanguages] = useState([])



  let params = new URLSearchParams(location);
  const repoName = params.get('name')

  useEffect(() =>{
    const fetchRepos = async () =>{
        const results = await fetch(`https://api.github.com/repos/lancevd/${repoName}/commits`)
        results.json().then(data => {
        // console.log(data)
        setRepoCommits(data)
        }
    )}  
    fetchRepos()
},[repoName])

useEffect(() =>{
  const fetchRepos = async () =>{
      const results = await fetch(`https://api.github.com/repos/lancevd/${repoName}/contributors`)
      results.json().then(data => {
      setRepoContributors(data)
      }
  )}  
  fetchRepos()
},[repoName])

useEffect(() =>{
  const fetchRepos = async () =>{
      const results = await fetch(`https://api.github.com/repos/lancevd/${repoName}/tags`)
      results.json().then(data => {
      setRepoTags(data)
      }
  )}  
  fetchRepos()
},[repoName])

useEffect(() =>{
  const fetchRepos = async () =>{
      const results = await fetch(`https://api.github.com/repos/lancevd/${repoName}/topics`)
      results.json().then(data => {
      setRepoTopics(data.names)
      }
  )}  
  fetchRepos()
},[repoName])

useEffect(() =>{
  const fetchRepos = async () =>{
      const results = await fetch(`https://api.github.com/repos/lancevd/${repoName}/languages`)
      results.json().then(data => {
      // console.log(Object.keys(data).length)
      setRepoLanguages(data)
      }
  )}  
  fetchRepos()
},[repoName])

  return (
    <div className='stat-boxes'>
        <StatBox title={"Commits"} count={repoCommits.length} /> 
        <StatBox title={'Contributors'} count={repoContributors.length} /> 
        <StatBox title={'Tags'} count={repoTags.length} /> 
        <StatBox title={'Topics'} count={repoTopics.length} /> 
        <StatBox title={'Languages'} count={Object.keys(repoLanguages).length} /> 
    </div>
  )
}

export default StatBoxes