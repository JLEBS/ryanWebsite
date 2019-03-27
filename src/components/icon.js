import React from 'react';
import styled, {css} from 'styled-components';
import Colors from './colors';

const glow = Colors.color3;

export const IconGroup = styled.ul`
    display: flex;
    list-style: none;
    justify-content: flex-end;

`

export const IconItem = styled.div`
    ${props => `background-image: url(${props.imageUrl});`}
    background-repeat: no-repeat;
    background-position: center;
 
    max-width: 49px;
    width: 100%;
    height: 383px;
    height: 0px;
    background-size: cover;
    padding-top: 4%;
    border-radius: 50%;

    animation: glowing 1500ms infinite,
    spin 4s infinite linear;

    @keyframes glowing {
        0% {
          box-shadow: 0 0 0px ${glow};
        }
        40% {
          box-shadow: 0 0 20px ${glow};
        }
        60% {
          box-shadow: 0 0 20px ${glow};
        }
        100% {
          box-shadow: 0 0 0px ${glow};
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