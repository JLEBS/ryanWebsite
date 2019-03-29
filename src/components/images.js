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

//Profile Image With Wavy Effect, All credit goes to https://codepen.io/enbee81/

export const Box = styled.div`
  width: 60vmin;
  height: 60vmin;
  position: relative;
  margin-left: 80px;
  padding-right: 70px;

  @media (max-width: 1000px){
    margin-left: 0px;
    padding-right:0px;
  }
`
export const SpinContainer = styled.div`
  width: 95%;
  height: 95%;
  animation: spin 12s linear infinite;
  position: relative;
`
export const Shape = styled.div`
  width: 100%;
  height: 100%;
  transition: border-radius 1s ease-out;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite both alternate;
  position: absolute;
  overflow: hidden;
  z-index: 5;
`

export const Image = styled.div`
    background-image: url(${ryanrewind});
    background-repeat: no-repeat;
    background-size: cover;
    width: 142%;
    height: 142%;
    position: absolute;
    left: -21%;
    top: -21%;

    animation: spin 12s linear infinite reverse;

    @keyframes morph {
      0% {border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;} 
      100% {border-radius: 40% 60%;} 
    }
    
    @keyframes spin {
      to {
        transform: rotate(1turn);
      }
`