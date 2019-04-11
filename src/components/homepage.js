import React from 'react';
import { Reset } from 'styled-reset';
import { Wrapper } from './wrapper';
import { SectionOne, SectionTwo, SectionMiddle } from './section';
import Header from './header';
import ParalaxVideo from './video';

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
        <ParalaxVideo/>
        <SectionOne/>
        <SectionMiddle/>
        <SectionTwo/>
    </Wrapper>
);

export default HomePage;