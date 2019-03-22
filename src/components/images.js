import styled from 'styled-components';

export const SocialMediaGroup = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
`

export const SocialMediaItem = styled.a`
  ${props => 
    `href=(${props.href});`}
  ${props => 
  `background-image: url(${props.imageUrl});`}
  background-repeat: no-repeat;
  height:30px;
  width:30px;

  `