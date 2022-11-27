import React from 'react';
import myImage from './ashley-delic.jpeg';

export default function Header() {
  return (
    <div className='header-container'>
        
      <img src={myImage} width="317px" height="317px"/>

      <h1 className='my-name'>Ashley Delic</h1>
      <h2 className='profession-title'>Frontend Developer</h2>
      <a href='ashley.website'>ashley.website</a>
      <div className='eemail-btn'>
      <a href='mailto:ashleycohzer96@gmail.com'></a><button>Email</button>
      </div>
      <div className='linkedin-btn'>
          <a href='linkedin.com/in/ashleydelic'></a><button>LinkedIn</button>
      </div>
    </div>
  )
}
