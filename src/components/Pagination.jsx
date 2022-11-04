import React from 'react'
import { useState } from 'react';

const Pagination = ({allRepos, postsPerPage, currentPage, setCurrentPage}) => {
    let pages = [];
    for (let i=1; i<= Math.ceil(allRepos/postsPerPage); i++ ) {
        pages.push(i)
    }

  return (
    <div className='pagination mt-5'> 
        <button
			onClick={() => setCurrentPage(currentPage-1) }
			id='prev'
            disabled={currentPage==1 ? true : false}
			>
            Prev
			</button>
        {pages.map((page, index) => {
            return (
                <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={page === currentPage ? "active" : ""}
                    >
                    {page}
                </button>
            );
        }
        )}
        <button
			onClick={() => setCurrentPage(currentPage+1) }
			id='next'
            // disabled={false}
            disabled={currentPage==pages.length ? true : false}
			>
            Next
			</button>
    </div>
  )
}

export default Pagination