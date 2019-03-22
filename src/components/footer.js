import React from 'react';
import { SocialMediaGroup, SocialMediaItem } from './images'
import twitter from '../img/twitter.svg'
import youtube from '../img/youtube.svg'
import linkedin from '../img/linkedin.svg'

const Footer = () => (
  <footer>
    <SocialMediaGroup>
      <SocialMediaItem imageUrl={twitter} href={'https://twitter.com/lor_is'} />
      <SocialMediaItem imageUrl={youtube} href={'https://www.youtube.com/channel/UCIb7HfJ65qLsxP6w2yvo0rw'}/>
      <SocialMediaItem imageUrl={linkedin} href={'https://www.linkedin.com/in/ryan-callard-682a38130'} />
    </SocialMediaGroup>
  </footer>
)

export default Footer