import React from 'react';
import { SocialMediaGroup, SocialMediaItem } from './images';
//import {LinkedinSVG, TwitterSVG, YoutubeSVG } from '../img/social-media-images.js';
//import linkedin from '../img/linkedin.svg'
import { Spinner, Linkedin, Twitter, Youtube } from '../img/social-media-images.js'

const Footer = () => (
  <footer>
    <SocialMediaGroup>
     
      <SocialMediaItem href='https://twitter.com/lor_is'>
        <Twitter/> 
      </SocialMediaItem>
      <SocialMediaItem href='linkedin.com'>
        <Youtube/> 
      </SocialMediaItem>
      <SocialMediaItem href='linkedin.com'>
        <Linkedin/> 
      </SocialMediaItem>

    </SocialMediaGroup>
  </footer>
)

export default Footer