import styled, {css, keyframes} from 'styled-components';
import {colorWipe, colorWipeReverse} from './animation';

//Styling for each subsection
const Subsection = styled.div`
    width: 100%;
    position: relative;

    ${props => props.neutral && css`
    background-color: white;
 `}
`
export default Subsection;