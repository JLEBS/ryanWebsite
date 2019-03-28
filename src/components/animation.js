import styled, {css, keyframes} from 'styled-components';
import Colors from './colors';


//Color Swipe Animation
export const colorWipe = keyframes`
    0% {
        background-color: ${Colors.subSectionOne};
    }
    50% {
        background-color: ${Colors.subSectionOneTran};
    }
    100% {
        background-color: ${Colors.subSectionOne};
    }
`
export const colorWipeReverse = keyframes`
    0% {
        background-color: ${Colors.subSectionTwo};
    }
    50% {
        background-color: ${Colors.subSectionTwoTran};
    }
    100% {
        background-color: ${Colors.subSectionTwo};
    }
`

export const colorWipeLine = keyframes`
    0% {
        fill: ${Colors.subSectionOne};
    }
    50% {
        fill: ${Colors.subSectionOneTran};
    }
    100% {
        fill: ${Colors.subSectionOne};
    }
`;

export const colorWipeLineReverse = keyframes`
    0% {
        background-color: ${Colors.subSectionTwo};
    }
    50% {
        background-color: ${Colors.subSectionTwoTran};
    }
    100% {
        background-color: ${Colors.subSectionTwo};
    }
`