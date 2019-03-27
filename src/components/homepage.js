import React from 'react';
import { Reset } from 'styled-reset';
import { Wrapper, Container } from './wrapper';
import {Source, Video, VideoContainer } from './video';
import {SectionOne, SectionOneRectangle, SectionTwo, SectionMiddle} from './section';
import Title from './title';
import videoMain from '../img/videoMain.mp4';


const HomePage = () => (
    <Wrapper>
        <Reset/> 
        <VideoContainer>
        <Title/>
            <Video autoPlay muted loop>
                <Source src={videoMain} type='video/mp4'/>
            </Video>
        
        </VideoContainer>
       
<SectionOneRectangle reverted/>
        <SectionOne/>

        <SectionMiddle/>

        <SectionTwo/>

    </Wrapper>
);

export default HomePage;