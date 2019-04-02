import styled from 'styled-components';
import {Subheading} from './text';
import React from 'react';
import {Container} from './wrapper';
import {Bold} from './text';

const HeaderContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    width: 100%;
    z-index: 2;`;

const Header = () => (
    <HeaderContent>
        <Container header>
            <Subheading>
                <Bold href='https://www.youtube.com/watch?v=4jH9PIOiomE'>VIEW NEW PORTFOLIO</Bold>
            </Subheading>
        </Container>
    </HeaderContent>
);

export default Header;