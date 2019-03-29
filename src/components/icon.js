import styled, {css} from 'styled-components';
import Colors from './colors';

const glow = Colors.glow;

export const IconGroup = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;`


export const IconItem = styled.div`
    ${props => `background-image: url(${props.imageUrl});`}
    // background-repeat: no-repeat;
    // background-position: center;
 
    // max-width: 49px;
    // width: 100%;
    // height: 383px;
    // height: 0px;
    // background-size: cover;
    // padding-top: 4%;
    // border-radius: 50%;
    
    object-fit:cover;
    width:100px;
    height:100px;
    border-radius: 50%;

    cursor: pointer;
    background-size: 100%;
    opacity: 0.5;
    height:100px;
    width:100px;


    @media(max-width: 1000px){
      height:58px;
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