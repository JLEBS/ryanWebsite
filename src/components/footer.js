import React from 'react';
import { SocialMediaGroup, SocialMediaItem } from './images';

const Footer = () => (
  <footer>
    <SocialMediaGroup>
      <SocialMediaItem imageUrl='/img/twitter.png' />
      <SocialMediaItem imageUrl='/img/youtube.png' />
      <SocialMediaItem imageUrl='/img/linkedin.png' />
    </SocialMediaGroup>
  </footer>
);

export default Footer;