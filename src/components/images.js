import ryanrewind from '../img/ryanrewind.jpg'
import styled, {css} from 'styled-components';

export const SocialMediaGroup = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
`

export const SocialMediaItem = styled.a`
  ${props => `src=(${props.href});`}
`

export const ProfileImage = styled.div`
    background-image: url(${ryanrewind});
    background-repeat: no-repeat;
    background-size: cover;
    // height: auto;
    // padding-top:20%;
    // width: 100%;
    // max-width: 32em;
    border-radius: 50%;
    height: 30vw;
    width: 30vw;

`