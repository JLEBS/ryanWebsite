import React from 'react';
import { ShadowHeading, ShadowSubHeading } from './text';
import Footer from './footer';
import {FlexColumn, Container} from './wrapper';

const Title = () => (
    <Container>
        <FlexColumn>
            <ShadowHeading className='animated zoomInDown'>RYAN CALLARD</ShadowHeading>
            <ShadowSubHeading className='animated zoomInLeft' >Creative Producer for Audio and Video content.</ShadowSubHeading>
            <Footer ></Footer>
        </FlexColumn>
    </Container>
)

export default Title;