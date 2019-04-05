import React from 'react';
import { ShadowHeading, ShadowSubHeading } from './text';
import Footer from './footer';
import {FlexColumn, Container} from './wrapper';

const Title = () => (
    <Container>
        <FlexColumn>
            <ShadowHeading className='animated bounceInLeft'>RYAN CALLARD</ShadowHeading>
            <ShadowSubHeading className='animated fadeInUp' >Creative Producer for Audio and Video content.</ShadowSubHeading>
            <Footer ></Footer>
        </FlexColumn>
    </Container>
)

export default Title;