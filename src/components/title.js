import React from 'react';
import { ShadowHeading, Subheading } from './text';
import Footer from './footer';
import {FlexColumn, Container} from './wrapper';

const Title = () => (
    <Container>
        <FlexColumn>
            <ShadowHeading>RYAN CALLARD</ShadowHeading>
            <Subheading lineHeight shadow>Creative Producer for Audio and Video content.</Subheading>
            <Footer></Footer>
        </FlexColumn>
    </Container>
)

export default Title;