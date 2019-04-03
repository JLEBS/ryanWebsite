import styled from 'styled-components';
import {Subheading} from './text';
import React from 'react';
import {Container} from './wrapper';
import {Bold} from './text';
import Urls from './urls';

//W3Schools
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

    var currentScrollPos = window.pageYOffset;
    const nav =  document.getElementById("navbar");
    let size = nav.offsetHeight;

    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
      nav.style.top = `-${size}px`;
    }
      prevScrollpos = currentScrollPos;
}

const HeaderContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    width: 100%;
    transition: top 0.3s;
    z-index: 2;`;

const Header = () => (
    <HeaderContent id='navbar'>
        <Container header>
            <Subheading lineHeight>
                <Bold lightFont href={Urls.ryanPortfolio}>VIEW NEW PORTFOLIO</Bold>
            </Subheading>
        </Container>
    </HeaderContent>
);

export default Header;