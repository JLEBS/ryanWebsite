import React from 'react';
import { SocialMediaGroup, SocialMediaItem } from './images';
import { Linkedin, Twitter, Youtube } from '../img/social-media-images.js'

//Contains Social Media Details
const Footer = () => (
  <footer>
    <SocialMediaGroup>

      <SocialMediaItem target='_blank' href='https://twitter.com/lor_is'>
        <Twitter/> 
      </SocialMediaItem>

      <SocialMediaItem target='_blank' href='https://www.youtube.com/channel/UCIb7HfJ65qLsxP6w2yvo0rw'>
        <Youtube/> 
      </SocialMediaItem>

      <SocialMediaItem target='_blank' href='https://www.linkedin.com/in/ryan-callard-682a38130'>
        <Linkedin/> 
      </SocialMediaItem>

    </SocialMediaGroup>
  </footer>
)

export default Footer