import React, { useEffect, useState } from 'react'

const RepoCardFiles = () => {
    let location = window.location.search;
  const [repoContent, setRepoContent] = useState([])

  let params = new URLSearchParams(location);
  const videoID = params.get('watchid')
  const repoName = params.get('name')

  useEffect(() =>{
    const fetchRepos = async () =>{
        const results = await fetch(`https://api.github.com/repos/lancevd/${repoName}/contents`)
        results.json().then(data => {
        console.log(data)
        setRepoContent(data)
        }
    )}  
    fetchRepos()
},[])

  return (
    <div className='repo-card-files card col col-lg-8'>
        <h5>Files and Folders</h5>
        <table>
            <thead>
                <th>Name</th>
                <th>Type</th>
            </thead>
        </table>

    </div>
  )
}

export default RepoCardFiles