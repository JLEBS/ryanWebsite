import styled, {css} from 'styled-components';

const Wrapper = styled.div`
    background-color: grey;
    font-family: 'Open Sans', sans-serif;
`;

const Container = styled.div`
    max-width: 1480px;
    width: 100%;
    margin: 0 auto;
    padding-left:30px;
    padding-right:30px;
    position: relative;
    z-index: 1;
`;

const FlexContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`
export { Wrapper, Container, FlexContainer};