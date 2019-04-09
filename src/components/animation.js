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
        size: 1;
    }
    50% {
        transform: scale(2);
    }
    100% {
        transform: scale(1);
    }
`;

export const FadeIn = keyframes`
    0% {   
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const transformFunction = (number, scale) => {
    return `
    transform: rotate(${number}) scale(${scale});
    -webkit-transform: rotate(${number}) scale(${scale});
    -moz-transform: rotate(${number}) scale(${scale});
    -o-transform: rotate(${number}) scale(${scale}); 
    -ms-transform: rotate(${number}) scale(${scale}); 
    `
}

export const animationFunction = (animation, duration, length, type, animationTwo, durationTwo, lengthTwo, typeTwo) => {
    return `
    animation:${animation} ${duration} ${length} ${type}, ${animationTwo} ${durationTwo} ${lengthTwo} ${typeTwo};
    -webkit-animation:${animation} ${duration} ${length} ${type}, ${animationTwo} ${durationTwo} ${lengthTwo} ${typeTwo};
    -moz-animation:${animation} ${duration} ${length} ${type}, ${animationTwo} ${durationTwo} ${lengthTwo} ${typeTwo};
    -ms-animation:${animation} ${duration} ${length} ${type}, ${animationTwo} ${durationTwo} ${lengthTwo} ${typeTwo};
    -o-animation:${animation} ${duration} ${length} ${type}, ${animationTwo} ${durationTwo} ${lengthTwo} ${typeTwo};
    `
}

export const SpinGrow = keyframes`
    0% {
        ${transformFunction('0deg', '1.15')}
    }
    25% {
        ${transformFunction('90deg', '1')}
    }
    50% {
        ${transformFunction('180deg', '1.15')}
    }
    75% {
        ${transformFunction('270deg', '1')}
    }
    100% { 
        ${transformFunction('360deg', '1.15')}
    }
`;

export const Glowing = keyframes`
    0% {
        box-shadow: 0 0 0px ${Colors.glow}1);
        background-color: ${Colors.glow}0.1);
    }
    40% {
        box-shadow: 0 0 200px ${Colors.glow}1);
        background-color: ${Colors.glow}0.6);
    }
    60% {
        box-shadow: 0 0 40px ${Colors.glow}1);
        background-color: ${Colors.glow}0.4);
    }
    100% {
        box-shadow: 0 0 0px ${Colors.glow}1);
        background-color: ${Colors.glow}0.1);
    }
`;

export const randomAnimation = () => {
    const animations = [
        'fadeInUp',
        'fadeInDown',
        'fadeInLeft',
        'fadeInRight'
    ]
   let index =  Math.floor(Math.random() * animations.length);

   return animations[index];
}
