import React from 'react'
import profile from '../images/profile.png'

const About = () => {
  return (
    <div className='div' id='about'>
      <div className='inner-div'>
      <h2>Hi, I’m Raeleah!</h2>
        <div className='about-div'>
        
          <div className='img-div'>
            <img className='bio-img' src={profile} alt="profile" />
          </div>
          <div className='bio'>
            
            <p>I’m a Wisconsin native and Montana resident with a passion for connecting with kids and their families. I LOVE problem solving with parents on creative ways to support their child’s mental health and improve their regulation and behavior at home and in the community. </p>
            <p>Inspired by my own experiences, I am excited to connect with more kids and families in a collaborative effort to support pediatric mental health. I have my masters in occupational therapy with experience working in pediatric home health, schools and clinic settings. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
