import React from 'react';
import twitterIcon from './twitter-icon.png';
import facebookIcon from './facebook-icon.png';
import instagramIcon from './instagram-icon.png';
import githubIcon from './github-icon.png'

export default function Footer() {
  return (
    <div className='footer-container'>
        <img src={twitterIcon} className='footer-image' />
        <img src={facebookIcon} className='footer-image' />
        <img src={instagramIcon} className='footer-image' />
        <img src={githubIcon} className='footer-image' />
        

      
    </div>
  )
}
