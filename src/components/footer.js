import React from 'react';
import { SocialMediaGroup, SocialMediaItem } from './images';
import { Linkedin, Twitter, Youtube } from '../img/social-media-images.js';
import Urls from './urls';

const Footer = () => (
  <footer>
    <SocialMediaGroup>

      <SocialMediaItem twitter href={Urls.ryanTwitter}>
        <Twitter/> 
      </SocialMediaItem>

      <SocialMediaItem youtube href={Urls.ryanYoutube}>
        <Youtube/> 
      </SocialMediaItem>

      <SocialMediaItem linkedin href={Urls.ryanLinkedin}> 
        <Linkedin/> 
      </SocialMediaItem>

    </SocialMediaGroup>
  </footer>
)

export default Footer