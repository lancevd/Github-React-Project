import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import Pagination from './Pagination'

const Cards = () => {
    const [getRepos, setGetRepos] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(6);
    
    useEffect(() =>{
        const fetchRepos = async () =>{
            const results = await fetch('https://api.github.com/users/lancevd/repos')
            results.json().then(data => {
            console.log(data)
            setGetRepos(data)
            }
        )}
        fetchRepos()
    },[])

    // Truncating the length of description

    function shortenString() {

        for (let i=0; i<getRepos.length; i++){
            let newTitle = getRepos[i].description.textContent.slice(0, 30)+'...'
            if (getRepos[i].description.textContent.length > 20) {
                getRepos[i].description.textContent = newTitle
            } else if (!getRepos[i].description.textContent || getRepos[i].description.textContent.length < 1) {
                getRepos[i].description.textContent = ''
            }
    
        }
    }

    
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPost = getRepos.slice(firstPostIndex, lastPostIndex);


  return (
    <div className='cards'>
        <div className="row">
            {getRepos.length < 1 ? <h4 className='text-center'>Loading...</h4> : currentPost.map((repo) => (
                <Card key={repo.id} name={repo.name} description={''} />
            ))}
        </div>

        <Pagination
				allRepos={getRepos.length}
				postsPerPage={postsPerPage}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
		/>
    </div>
    
  )
}

export default Cards