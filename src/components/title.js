import React from 'react';
import { Heading, Subheading } from './text';
import Footer from './footer';
import {FlexColumn, Container} from './wrapper';

const Title = () => (
    <Container>
        <FlexColumn>
            <Heading shadow>RYAN CALLARD</Heading>
            <Subheading lineHeight shadow>Creative Producer for Audio and Video content.</Subheading>
            <Footer></Footer>
        </FlexColumn>
    </Container>
)

export default Title;