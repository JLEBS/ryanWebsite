import React from 'react';
import { SocialMediaGroup, SocialMediaItem } from './images';

const themePath = 'Users/jacqueslebreuilly/ryanWebsite/src/img/';


const Footer = () => (
  <footer>
    <SocialMediaGroup>
      <SocialMediaItem imageUrl='Users/jacqueslebreuilly/ryanWebsite/src/img/Twitter.svg' />
      <SocialMediaItem imageUrl='../img/youtube.svg' />
      <SocialMediaItem imageUrl='/src/img/linkedin.svg' />
    </SocialMediaGroup>
  </footer>
);

export default Footer;