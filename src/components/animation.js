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
