import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Home = () => {
  return (
    <div className='home-div' id='home'>
      <div>
        <h1>Boosting Your Child&#39;s Confidence</h1>
        {/* <HashLink to='/' smooth>
          Contact Us
        </HashLink> */}
        <HashLink to='/#book' smooth>
          Book With Us
        </HashLink>
      </div>
    </div>
  )
}

export default Home
