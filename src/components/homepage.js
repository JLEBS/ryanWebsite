import React from 'react';
import { Reset } from 'styled-reset';
import { Wrapper } from './wrapper';
import {Source, Video, VideoContainer } from './video';
import {SectionOne, SectionTwo, SectionMiddle} from './section';
import Title from './title';
import videoMain from '../img/videoMain.mp4';
import Header from './header';


const HomePage = () => (
    <Wrapper>
        <Reset/>
        <Header/> 
        <VideoContainer>
        <Title/>
            <Video autoPlay muted loop>
                <Source src={videoMain} type='video/mp4'/>
            </Video>
        
        </VideoContainer>
       
        <SectionOne/>
   
        <SectionMiddle/>

        <SectionTwo/>

    </Wrapper>
);

export default HomePage;