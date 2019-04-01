import styled, {css} from 'styled-components';
import {colorWipe, colorWipeReverse} from './animation';

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
`;

const Container = styled.div`
    padding-left:1.6rem;
    padding-right:1.6rem;
    padding-top:4rem;
    padding-bottom:4rem;
    margin: 0 auto;

    ${props => props.primary && css`
        animation: ${colorWipe} 15s ease infinite;
    `}

    ${props => props.secondary && css`
        animation: ${colorWipeReverse} 15s ease infinite;
    `}

    ${props => props.neutral && css`
       background-color: white;
    `}
`;

const MaxWidthContainer = styled.div`
    max-width: 1480px;
    margin: 0 auto;
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


    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export { Wrapper, Container, FlexColumn, FlexRow, FixedContainer, MaxWidthContainer};