import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Home = () => {
  return (
    <div className='home-div'>
      <div>
        <h1>Empowering families with creative at-home tools and strategies.</h1>
        <HashLink to='/' smooth>
          Contact Us
        </HashLink>
        <HashLink to='/' smooth>
          Book With Us
        </HashLink>
      </div>
    </div>
  )
}

export default Home
