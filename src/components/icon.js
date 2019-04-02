import styled from 'styled-components';
import Colors from './colors';
import { fluidRange } from 'polished';

const glow = Colors.glow;

export const VideoContainer = styled.div`
    
    position: relative;
    padding-bottom: 25%;
    padding-top: 25px;
    height: 0;
    flex: 1;

    @media (max-width: 1000px){

      width: 100%;
      padding-bottom: 50%;

      ${fluidRange(
        {
          prop: 'margin-bottom',
          fromSize: '25px',
          toSize: '65px',
        },
        '400px',
        '1000px',
      )}

    }
    
    & iframe {

      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }`;

export const IconGroup = styled.ul`
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
    flex: 1;`
    

export const IconItem = styled.div`
    ${props => `background-image: url(${props.imageUrl});`}
    background-repeat: no-repeat;
    // background-position: center;
 
    // max-width: 49px;
    // width: 100%;
    // height: 383px;
    // height: 0px;
    // background-size: cover;
    // padding-top: 4%;
    // border-radius: 50%;
    
    object-fit:cover;
    border-radius: 50%;
    cursor: pointer;
    background-size: 100%;
    opacity: 0.5;
    height:100px;
    width:100px;

    @media(max-width: 1000px){
      height:75px;
      width: 75px;
    }

    &:hover{
      opacity: 1;
      animation: glowing 3000ms infinite ease,
      spin 8s infinite linear;
      animation-fill-mode: forwards;
    }

    @keyframes glowing {
        0% {
          box-shadow: 0 0 0px ${glow}1);
          background-color: ${glow}0.1);
        }
        40% {
          box-shadow: 0 0 200px ${glow}1);
          background-color: ${glow}0.6);
          
        }
        60% {
          box-shadow: 0 0 40px ${glow}1);
          background-color: ${glow}0.4);
        }
        100% {
          box-shadow: 0 0 0px ${glow}1);
          background-color: ${glow}0.1);
        }
      }
      
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
`