import React from 'react';
import twitterIcon from './twitter-icon.png';
import facebookIcon from './facebook-icon.png';
import instagramIcon from './instagram-icon.png';
import githubIcon from './github-icon.png'

export default function Footer() {
  return (
    <div className='footer-container'>
        <img src={twitterIcon} className='footer-twitter' />
        <img src={facebookIcon} className='footer-facebook' />
        <img src={instagramIcon} className='footer-instagram' />
        <img src={githubIcon} className='footer-github' />
        

      
    </div>
  )
}
