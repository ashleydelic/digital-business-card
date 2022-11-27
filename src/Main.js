import React from 'react';
import emailIcon from './Icon.png';
import linkedInIcon from './linkedin.png';


export default function Main() {
  return (
    <div className='main-container'>
      <h1>Ashley Delic</h1>

      <h2>Frontend Developer</h2>

      <h3 className='website'>
      <a href='ashley.website'>ashley.website</a>
      </h3>

      <div className='email-btn'>
      <button><img className='email-img' src={emailIcon} />Email</button>
      </div>

      <div className='linkedin-btn'>
          <button><img  src={linkedInIcon} />LinkedIn</button>
      </div>

      <div className='about-interests-section'>
        <h2>About</h2>
        <p>Results-driven and passionate software developer with a demonstrated experience in building HTML, CSS and React JavaScript applications, always looking for new skills and technologies to learn</p>
        <h2>Interests</h2>
        <p>Baking expert. Mommy duties. Entertainment news. Hot girl walks. Social media.</p>
      </div>
    </div>
  )
}
