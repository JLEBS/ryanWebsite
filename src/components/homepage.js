import React from 'react';
import { Reset } from 'styled-reset';

import { Wrapper, Container } from './wrapper';
//import { Heading, Paragraph } from './text';
import Video from './video';
import Footer from './footer';
import {SectionOne, SectionTwo} from './section';
import Title from './title';

const HomePage = () => (

<Wrapper>
    <Reset/>
    {/* <Video></Video> */}
    
    <Title></Title>
    <Container>
        {/* <Heading>
            Ryan Callard
        </Heading>
        <Heading as='h2' primary >
            Creative Producer for Audio and Video content.
        </Heading>  */}

    </Container>


        <SectionOne>
        </SectionOne>

        <SectionTwo>
            
        </SectionTwo>


</Wrapper>
);

export default HomePage;