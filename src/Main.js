import React from 'react';
import emailIcon from './email-icon.png';
import linkedInIcon from './linkedin-icon.png';


export default function Main() {
  return (
    <div className='main-container'>
      <h1>Ashley Delic</h1>

      <h2>Frontend Developer</h2>

      <h3 className='website'>
      <a href='ashley.website'>ashley.website</a>
      </h3>

      <div className='email-btn'>
      <button><img src={emailIcon} />Email</button>
      </div>

      <div className='linkedin-btn'>
          <button><img src={linkedInIcon} />LinkedIn</button>
      </div>

      <div className='About-section'>
        <h2>About</h2>
        <p></p>
      </div>
    </div>
  )
}
