import styled from 'styled-components';

export const SocialMediaGroup = styled.ul`
  display: flex;
  list-style: none;
`

export const SocialMediaItem = styled.a`
  ${props => `background-image: url(${props.imageUrl});`}
  background-repeat: no-repeat;
  `