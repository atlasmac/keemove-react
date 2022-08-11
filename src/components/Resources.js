import React from 'react'

const Resources = () => {
  return (
    <div className='div'>
      <div className='inner-div'>
        <h2>Resources</h2>
        <p className='ems'>Mental health emergency - call 988</p>
        <div className='resource-div'>
          <div>
            <h3>Local Resources</h3>
            <ul className='resource-ul'>
              <li>
                <a href="https://www.familiesfirstmt.org">Families First MT</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Nationwide Resources</h3>
            <ul className='resource-ul'>
              <li>
                <a href="">
                  example
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Regulation Curriculums</h3>
            <ul className='resource-ul'>
              <li>
                <a href="https://zonesofregulation.com/index.html ">Zones of Regulation</a>
              </li>
              <li>
                <a href="https://www.powerfullyyou.org">Powerfully You</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
