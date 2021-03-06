import styled, {css} from 'styled-components';
import {colorAnimation, FadeIn} from './animation';
import indexFunction from './z-index';

const responsiveAnimation = () => {
    var w = window.innerWidth;
    return w / 300;
}

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    background-color: black;
`;

const Container = styled.div`
    padding-left:1.6rem;
    padding-right:1.6rem;
    padding-top:4rem;
    padding-bottom:4rem;
    margin: 0 auto;

    ${props => props.header && css`
       padding-top: unset;
       padding-bottom: unset;
       ${indexFunction('title')}
    `}

    ${props => props.primary && css`
        animation: ${colorAnimation('background-color', 'primary')} 15s ease infinite;
    `}

    ${props => props.secondary && css`
        animation: ${colorAnimation('background-color', 'secondary')} 15s ease infinite;
    `}

    ${props => props.neutral && css`
       background-color: white;
    `}
`;

const MaxWidthContainer = styled.div`
    max-width: 1480px;
    margin: 0 auto;

    & .hide{
        display: none;
    }

    & .show{
        display: flex;
        animation-duration: ${responsiveAnimation}s;
    }
`

const FixedContainer = styled.div`
    position: fixed;
`

const FlexColumn = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`

const FlexRow = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly; 
    ${props => props.center && css`
        align-items:center;
    `}

    @media (max-width: 1300px) {
        flex-direction: column;
        align-items: center;
    }
`

export { Wrapper, Container, FlexColumn, FlexRow, FixedContainer, MaxWidthContainer};