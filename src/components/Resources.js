import React from 'react'

const Resources = () => {
  return (
    <div className='div resources' id='resources'>
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
                <a href="https://www.aap.org/en/patient-care/mental-health-initiatives/mental-health-resources-for-families/">
                  American Academy of Pediatrics
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
              <li>
                <a href="https://characterstrong.com">Character Strong</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
