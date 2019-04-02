import styled, {css} from 'styled-components';
import {colorAnimation} from './animation';

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
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
    align-items:center;

    @media (max-width: 1000px) {
        flex-direction: column;
    }

`

export { Wrapper, Container, FlexColumn, FlexRow, FixedContainer, MaxWidthContainer};