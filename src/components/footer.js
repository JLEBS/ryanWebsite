import React from 'react';
import { SocialMediaGroup, SocialMediaItem } from './images';
import { Linkedin, Twitter, Youtube } from '../img/social-media-images.js';
import Urls from './urls';

const Footer = () => (
  <footer>
    <SocialMediaGroup>

      <SocialMediaItem className='animated rotateInUpRight' twitter aria-label="Click to view the Ryans Twitter" href={Urls.ryanTwitter}>
        <Twitter/> 
      </SocialMediaItem>

      <SocialMediaItem className='animated zoomIn' youtube aria-label="Click to view the Ryans Youtube Channel" href={Urls.ryanYoutube}>
        <Youtube/> 
      </SocialMediaItem>

      <SocialMediaItem className='animated rotateInUpLeft' linkedin aria-label="Click to view the Ryans Linkedin" href={Urls.ryanLinkedin}> 
        <Linkedin/> 
      </SocialMediaItem>

    </SocialMediaGroup>
  </footer>
)

export default Footer