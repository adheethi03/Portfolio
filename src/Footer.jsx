import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', fontSize: '24px', alignItems:'center',justifyContent:'center', marginTop:'20px' }}>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} color="black" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} color="black" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} color="black" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} color="black" />
    </a>
  </div>
  )
}

export default Footer
