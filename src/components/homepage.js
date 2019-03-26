import React from 'react';
import { Reset } from 'styled-reset';
import { Wrapper, Container } from './wrapper';
import Video from './video';
import {SectionOne, SectionTwo, SectionMiddle} from './section';
import Title from './title';

const HomePage = () => (
    <Wrapper>
        <Reset/> 
        <Title/>

        <SectionOne/>

        <SectionMiddle/>

        <SectionTwo/>

    </Wrapper>
);

export default HomePage;