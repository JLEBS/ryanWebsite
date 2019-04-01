import React from 'react';
import styled, {css} from 'styled-components';
import Colors from '../components/colors';
import {colorWipeLine, colorWipeLineReverse} from '../components/animation';
import {fluidRange} from 'polished';

const WidthHeight = () => (
  `width: 100px; height: 100px;`
);

const PathStatic = () => (
  `fill: black;
  opacity: 0.5;
  stroke: lightgrey;
  `
);

const PathHover = () => (
  `opacity: 1;
  border-radius: 100%
  color: green;
  fill: green;
  transform: scale(1.25)
  transition: background-color .5s, transform .5s ease-out
  `
);

export const Line = ({
  rotation, alternativeColor
}) => (
  <StyledLine viewBox="0 0 1920 171" fill="none" xmlns="http://www.w3.org/2000/svg"  alternativeColor={alternativeColor} rotation={rotation}>
    <path className='line-path' d="M0 171L1920 0V171H0Z" />
  </StyledLine>
);


export const Dash = ({
  rotation, alternativeColor, dash
}) => (
  <StyledLine  viewBox="0 0 1921 191" fill="none" xmlns="http://www.w3.org/2000/svg" dash={dash}  alternativeColor={alternativeColor} rotation={rotation}>
    <path className='line-path' d="M0 174.47L1921 0V17.0406L0 191V174.47Z" fill="#FF0000"/>
  </StyledLine>
);


export const Linkedin = () => (
  <StyledLinkedin viewBox="0 0 512 512" id="linkedin">
    <path 
      id='linkedin-path' 
      d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z">
    </path>         
  </StyledLinkedin>
);

export const Twitter = () => (
  <StyledTwitter viewBox="0 0 512 512" id="twitter">
    <path 
      id='twitter-path' 
      d='M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z'>
    </path>         
  </StyledTwitter>
);

export const Youtube = () => (
  <StyledYoutube viewBox="0 0 512 512" id="youtube">
    <path 
      id='youtube-path' 
      d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z">
    </path>         
  </StyledYoutube>
);



// li
// a.icon-28.youtube(href='#' title='YouTube')
//   .ir: svg(viewbox='0 0 512 512' preserveAspectRatio='xMidYMid meet')
//     path(d='M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z')

// li
// a.icon-26.twitter(href='#' title='Twitter')
//   .ir: svg(viewbox='0 0 512 512' preserveAspectRatio='xMidYMid meet')
//     path(d='M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z')


// li
// a.icon-17.linkedin(href='#' title='LinkedIn')
// .ir: svg(viewbox='0 0 512 512' preserveAspectRatio='xMidYMid meet')
// path(d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z')






const StyledLine = styled.svg`

  position: relative;
  top: 3px;

  ${props => props.dash && css`
    top: 60px;

    ${fluidRange(
      {
        prop: 'top',
        fromSize: '35px',
        toSize: '220px',
      },
      '400px',
      '2560px',
    )}
  `}

  & .line-path{
    animation: ${colorWipeLine} 15s ease infinite;
  }

  //For blue section
  ${props => props.alternativeColor && css`
    
    stroke: green;
    
    animation: ${colorWipeLineReverse} 15s ease infinite;

    & .line-path{
      animation: ${colorWipeLineReverse} 15s ease infinite;
    }
  `}

  //For rotated version
  ${props => props.rotation && css`
    top:-1px
    transform: rotate(180deg);

    ${props => props.dash && css`

      ${fluidRange(
        {
          prop: 'top',
          fromSize: '-35px',
          toSize: '-220px',
        },
        '400px',
        '2560px',
      )}

    `}
  `}

`;

const StyledLinkedin = styled.svg`
  ${WidthHeight()};

  & #linkedin-path{
    ${PathStatic()};
  } 
  & #linkedin-path:hover {
    ${PathHover()};
  }
`;

const StyledTwitter = styled.svg`
  ${WidthHeight()};

  & #twitter-path{
    ${PathStatic()};
  } 
  & #twitter-path:hover {
   ${PathHover()};
  }
`;

const StyledYoutube = styled.svg`
  ${WidthHeight()};

  & #youtube-path{
    ${PathStatic()};
  } 
  & #youtube-path:hover {
    ${PathHover()};
  }
`;


















// export const Spinner = () => (
//   <StyledSpinner viewBox="0 0 50 50">
//     <circle
//       className="path"
//       cx="25"
//       cy="25"
//       r="20"
//       fill="none"
//       strokeWidth="4"
//     />
//   </StyledSpinner>
// );

// const StyledSpinner = styled.svg`
//   animation: rotate 2s linear infinite;
//   margin: -25px 0 0 -25px;
//   width: 50px;
//   height: 50px;
  
//   & .path {
//     stroke: #5652BF;
//     stroke-linecap: round;
//     animation: dash 1.5s ease-in-out infinite;
//   }
  
//   @keyframes rotate {
//     100% {
//       transform: rotate(360deg);
//     }
//   }
//   @keyframes dash {
//     0% {
//       stroke-dasharray: 1, 150;
//       stroke-dashoffset: 0;
//     }
//     50% {
//       stroke-dasharray: 90, 150;
//       stroke-dashoffset: -35;
//     }
//     100% {
//       stroke-dasharray: 90, 150;
//       stroke-dashoffset: -124;
//     }
//   }
// `;


