import React from 'react';
import { Heading, Subheading } from './text';
import Footer from './footer';
import {FlexColumn, Container, FixedContainer} from './wrapper';

const Title = () => (
    <Container>
        <FlexColumn>
            <Heading>RYAN CALLARD</Heading>
            <Subheading>Creative Producer for Audio and Video content.</Subheading>
            <Footer></Footer>
        </FlexColumn>
    </Container>
)

export default Title;