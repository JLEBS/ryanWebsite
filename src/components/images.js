import ryanrewind from '../img/ryanrewind.jpg'
import styled  from 'styled-components';
import { fluidRange } from 'polished';

export const SocialMediaGroup = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  padding: 1rem;
`

export const SocialMediaItem = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer noopener',
  className: 'social-media-image'
  })`

  animation-duration: 2s;
  animation-delay: 1.5s;

  fill: white;
  height: 5rem;
  width: 5rem;

  ${fluidRange(
    {
      prop: 'height',
      fromSize: '50px',
      toSize: '150px',
    },
    '400px',
    '1500px',
  )}

  ${fluidRange(
    {
      prop: 'width',
      fromSize: '50px',
      toSize: '150px',
    },
    '400px',
    '1500px',
  )}

  &:hover {
    background: white;
    border-radius: 100%;
    color: black;
    fill: black;
    transform: scale(1.15);
    transition: background-color .5s, transform .5s ease-out;
  }
`

//Profile Image With Wavy Effect, All credit goes to https://codepen.io/enbee81/
//https://codepen.io/enbee81/pen/LBMKqV

export const Box = styled.div`
  width: 60vmin;
  height: 60vmin;
  position: relative;
  margin-left: 80px;

  @media (max-width: 1000px){
    margin-left: 0px;
    padding-right:0px;
  }
`
export const SpinContainer = styled.div`
  width: 90%;
  height: 90%;
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