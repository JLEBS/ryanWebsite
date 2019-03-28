import styled, {css} from 'styled-components';
import React from 'react';
import videoMain from '../img/videoMain.mp4';
import Colors from './colors';

export const Video = styled.video
`   
    top: 50%;
    left: 50%;
    min-width: 100vw;
    min-height: 100vh;
    width: auto;
    height: auto;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);

   position: fixed;
   z-index: -2;
`;

export const Source = styled.source`

`;

export const VideoContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    `