import React from 'react';
import myImage from './ashley-delic.jpeg';

export default function Info() {
  return (
    <div>
      <img src={myImage} width="317px" />
      <h1 className='my-name'>Ashley Delic</h1>
      <h2 className='profession-title'>Frontend Developer</h2>
      <a href='ashley.website'>ashley.website</a>
      <button className='email-btn'
    </div>
  )
}
