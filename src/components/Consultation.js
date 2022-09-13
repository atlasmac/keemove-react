import React from 'react'
import CalendlyButton from './CalendlyButton'

const Consultation = () => {
  return (
    <div className='div' id='book'>
      <div className='inner-div consultation'>
        <h2>Pediatric Consultation</h2>
        <div className='con-div'>
          <p>KeeMove was established to provide individualized support for families navigating difficult seasons. Raeleah uses her specialized training in pediatric development, behavior management and regulation practices to problem solve with families. Her model focuses on:</p>
          <ul>
            <li>Strength-based approach for parent and child</li>
            <li>Neurodiversity affirming - understanding and appreciating individual differences</li>
            <li>Mind-body connection</li>
            <li>Parent-child connection</li>
            <li>Supports sensory health</li>
            <li>Applies principles of the Universal Design for Learning</li>
            <li>Thinks outside the box to find tools and strategies to use at-home and in the community</li>
            <li>Empowers children and families with education and resources that benefit the whole family</li>
          </ul>
          <p>Book a free initial consultation below.</p>
        </div>
        <CalendlyButton />
      </div>
      {/* <div>
      <a href="https://www.psychologytoday.com/profile/1026253" class="sx-verified-seal"></a>
      <script type="text/javascript" src="https://member.psychologytoday.com/verified-seal.js" data-badge="13" data-id="1026253" data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="></script>
      </div> */}
    </div>
  )
}

export default Consultation
