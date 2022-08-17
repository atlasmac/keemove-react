import React from 'react'
import image from '../images/kid-craft.jpg'

const Start = () => {
  return (
    <div className='div' id='start'>
      <div className='inner-div'>
        <h2>Don’t know where to start?</h2>
      </div>
      <div className='inner-div start-div'>
        <div>
          <p>Connection can help ❤️. Both children and adults crave connection during all seasons of life.
            So, if you or your child are working through a difficult season, focus on your connection with each other. Offer a hug, spend quality time with each other, or provide positive affirmations.
            Then comes integrating things you learn into your family’s routine in order to make the greatest impact.
          </p>
        </div>
        <div className='text-img'>
          <img
            className='kid-craft'
            src={image}
            alt="kid playing with paper and scissors"
          />
        </div>
      </div>
      <div className='inner-div next'>
        <h2>What’s next?</h2>
        <div className='center'>
          <h3>Structure + Routines</h3>
          <p>Structure and routines help with predictability and flexibility. </p>
        </div>
        <div className='next-div'>

          <div>
            <h3>Flexibility</h3>
            <p>So, routines help children learn how to be more flexible? Yes! </p>
            <p>Routines are meant to be broken. Unexpected things are always going to happen, and when they do, kids benefit from having a routine that they can fall back on. Think about after you come back from a vacation and how it’s often a relief to go back to your everyday routine.</p>
          </div>

          <div>
            <h3>Predictability</h3>
            <p>Predictability is important because it shows kids that they are safe and secure. All kids crave stability of some sort, so this taps into that need. </p>
            <p>Structure and routine makes your life easier, and also can help decrease your child’s anxiety about the unknown. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start
