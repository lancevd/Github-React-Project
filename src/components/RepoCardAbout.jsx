import React, { useEffect, useState } from 'react'

const RepoCardAbout = () => {
    let location = window.location.search;
    const [repoContent, setRepoContent] = useState([])
    const [repoTopics, setRepoTopics] = useState([])
    const [repoLanguages, setRepoLanguages] = useState([])

    let params = new URLSearchParams(location);
    const repoName = params.get('name')

    useEffect(() =>{
        const fetchRepos = async () =>{
            const results = await fetch(`https://api.github.com/repos/lancevd/${repoName}`)
            results.json().then(data => {
            setRepoContent(data)
            setRepoTopics(data.topics)
            console.log(repoTopics)
            }
        )}  
        fetchRepos()
    },[repoTopics, repoName])

    useEffect(() =>{
        const fetchRepos = async () =>{
            const results = await fetch(`https://api.github.com/repos/lancevd/${repoName}/languages`)
            results.json().then(data => {
                console.log(data)
                setRepoLanguages(data)
            }
        )}  
        fetchRepos()
    },[repoName])

  return (
    <div className='repo-card-about ml-5 py-3 container card col col-lg-4'>
        <h5>About Repository</h5>
        <p>{!repoContent.description ? 'No description available for this repository': repoContent.description}</p>

        <p><b>Topics</b></p>
        {repoTopics.length === 0 ? 'No Topics' : repoTopics.map((topic)=>(
            <li>{topic}</li>
        ))}

        <p><b>Languages</b></p>
        {
        Object.keys(repoLanguages).map((repo) => (
            <p>- {repo}</p>
        ))
        }

    </div>
  )
}

export default RepoCardAbout