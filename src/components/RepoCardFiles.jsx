import React, { useEffect, useState } from 'react'

const RepoCardFiles = () => {
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
},[repoName])

  return (
    <div className='repo-card-files container py-3 card col col-lg-8'>
        <h5>Files and Folders</h5>
        <table>
            <thead>
                <th>Name</th>
                <th>Type</th>
            </thead>
            <tbody>
                {repoContent.map((content) =>(
                    <tr>
                        <td><a href={`${content.html_url}`}>{content.name}</a></td>
                        <td>{content.type==='dir' ? 'Folder/Directory' : 'File'}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default RepoCardFiles