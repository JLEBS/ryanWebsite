import styled, {css} from 'styled-components';


const textColorPrimary = 'white';
const textColorSecondary = 'black';
const subSectionOne = '#ba4b3f';
const subSectionTwo = '#5e889b';


const Heading = styled.h1`
    font-size: 100px;
    color: ${textColorPrimary};
    text-shadow: 1px;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;

    ${props => props.primary && css`
    font-size: 12px;
    color: blue
    `}
`

export default Heading;