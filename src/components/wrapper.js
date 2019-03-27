import styled, {css} from 'styled-components';

const Wrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
`;

const Container = styled.div`
    max-width: 1480px;
    padding-left:1.6rem;
    padding-right:1.6rem;
    padding-top:2rem;
    padding-bottom:2rem;
    margin: 0 auto;
`;

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
    align-items: center;
    outline: 5px solid yellow;

    @media (max-width: 1000px) {
      
        flex-direction: column;
    }

`

export { Wrapper, Container, FlexColumn, FlexRow, FixedContainer};