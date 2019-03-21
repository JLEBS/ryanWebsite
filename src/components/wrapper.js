import styled, {css} from 'styled-components';

const Wrapper = styled.div`
    background-color: grey;
    font-family: 'Open Sans', sans-serif;
`;

const Container = styled.div`
    max-width: 1480px;
    width: 100%;
    padding: 0 40px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
`;

export { Wrapper, Container };