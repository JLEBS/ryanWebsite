import { keyframes} from 'styled-components';
import Colors from './colors';

export const colorAnimation = (selector, animation) => {
    
    let animationFirst = '';
    let animationSecond = '';

    if(animation === 'primary'){
        animationFirst = Colors.subSectionOne;
        animationSecond = Colors.subSectionOneTran;
    }
    else{
        animationFirst = Colors.subSectionTwo;
        animationSecond = Colors.subSectionTwoTran;
    }

    return keyframes`
        0% {
            ${selector}: ${animationFirst};
        }
        50% {
            ${selector}: ${animationSecond};
        }
        100% {
            ${selector}: ${animationFirst};
        }`
}

export const VideoSlide = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.7
    }
    100% {
        opacity: 1;
    }
`