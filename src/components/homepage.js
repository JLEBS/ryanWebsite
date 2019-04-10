import React from 'react';
import { Reset } from 'styled-reset';
import { Wrapper } from './wrapper';
import {Source, Video, VideoContainer} from './video';
import {SectionOne, SectionTwo, SectionMiddle} from './section';
import Title from './title';
import backgroundVideo from '../video/backgroundVideo.mp4';
import Header from './header';

/*
let videoPaused = false;
const vid = document.querySelector("#video");

$(window).scroll(function(){
    var scrollval = $(this).scrollTop();   
    console.log(vid);
    
    if (scrollval >= 1200 && videoPaused === false) 
    { 
       videoPaused = true;
       console.log('hidevid');
       vid.pause();
       $('#backgroundVideo').hide();
    }
    if (scrollval <= 1200 && videoPaused === true){
        videoPaused = false;
        console.log('showvid');
    }
});

const PauseVideo = () => {
    let videoRef = React.createRef();
}*/

const HomePage = () => (

    <Wrapper>
        <Reset/>
        <Header/> 

        <VideoContainer>
            <Title/>
            <Video id='backgroundVideo' playsInline autoPlay muted loop>
                <Source src={backgroundVideo} type='video/mp4'/>
            </Video>
        </VideoContainer>

        <SectionOne/>
   
        <SectionMiddle/>

        <SectionTwo/>
    </Wrapper>
);

export default HomePage;