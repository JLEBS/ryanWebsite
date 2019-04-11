import React from 'react';
import styled from 'styled-components';
import Colors from './colors'
import Title from './title';
//Video Imports
import videoMainIphone from '../video/videoMainIphone.mp4';
import backgroundVideo from '../video/backgroundVideo.mp4';
import gnomed from '../video/gnomed.mp4';
import sample from '../video/sample.mp4';

const ParalaxVideo = () => (
    <VideoContainer>
        <Title/>
        <Video id='backgroundVideo' playsInline autoPlay loop>
            <Source src={backgroundVideo} type='video/mp4'/>
            {/* <Source src={videoMainIphone} type='video/mp4'/> */}
            {/* <Source src={gnomed} type='video/mp4'/> */}
        </Video>
    </VideoContainer>
);

const Video = styled.video`
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100vw;
    min-height: 100vh;
    width: auto;
    height: auto;
    transform: translate(-50%,-50%);
    object-fit: cover;
`;

const Source = styled.source`
`;

const VideoContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    &::after{
        content: '';
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: ${Colors.subSectionTwo};
        opacity: 0.3;
        z-index: 0;
        height: 100vh;
        width: 100vw;
    }
`;

export default ParalaxVideo;