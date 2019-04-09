import styled from 'styled-components';
import { fluidRange } from 'polished';
import {SpinGrow, Glowing, animationFunction} from './animation';

export const VideoContainer = styled.div`
    
    position: relative;
    padding-bottom: 24%;
    padding-top: 25px;
    height: 0;
    flex: 1;

    @media (max-width: 1300px){

      width: 100%;
      padding-bottom: 46%;

      ${fluidRange(
        {
          prop: 'margin-bottom',
          fromSize: '25px',
          toSize: '65px',
        },
        '400px',
        '1300px',
      )}
    }
    
    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 14px 13px 17px 2px rgba(0,0,0,0.3);
    }`;

export const IconGroup = styled.div`
    display: flex;
    list-style: none;
    justify-content: space-between;
    
    ${fluidRange(
      {
        prop: 'padding-bottom',
        fromSize: '50px',
        toSize: '200px',
      },
      '400px',
      '1500px',
    )}`

export const IconDescription = styled.div`
    display: flex;
    list-style: none;
    flex-direction: column;
    flex: 1;
    min-height: 380px;
    padding-left: 80px;

    ${fluidRange(
      {
        prop: 'padding-left',
        fromSize: '0px',
        toSize: '80px',
      },
      '1300px',
      '1540px',
    )}


    @media(max-height: 1000px){
      min-height: 350px;
    }
    `
    
export const IconItem = styled.button`
    ${props => `background-image: url(${props.imageUrl});`}
    background-repeat: no-repeat;
    object-fit:cover;
    border-radius: 50%;
    background-size: 100%;
    opacity: 0.5;
    height:100px;
    background-color: transparent;
    width:100px;

    @media(max-width: 1000px){
      height:75px;
      width: 75px;
    }

    @media(max-width: 400px){
      height:50px;
      width: 50px;
    }

    &:hover{
      opacity: 1;
      transform: scale(1.15);
    }

    &:focus{
      opacity: 1;
      animation: ${Glowing} 3000ms infinite ease, ${SpinGrow} 8s infinite linear;
      -webkit-animation: ${Glowing} 3000ms infinite ease, ${SpinGrow} 8s infinite linear;
      animation-fill-mode: forwards;
    }

    &:first-child{
      display: none;
    }
`