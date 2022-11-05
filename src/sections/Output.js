import React from 'react'
import Cards from '../components/Cards'
import Header from '../components/Header'
import {Helmet} from 'react-helmet'

const Output = () => {
  return (
    <div className='output container'>
      <Helmet>
          <title>Olamide | Repositories</title>
          <meta charSet = 'utf-8' />
          <meta name="description" content="Olamide Winner Mosobalaje's Github repositories" />
          <meta name= "keywords" content= "Frontend, reactjs, git, github, frontend developer, Mosobalaje Olamide Winner, github API" />
	        <meta name= "author" content= "Mosobalaje Olamide Winner" />
      </Helmet>

        <Header/>
        <Cards/>
    </div>
  )
}

export default Output