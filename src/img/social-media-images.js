import React from 'react';
import styled, {css} from 'styled-components';
import Colors from '../components/colors';
import {colorWipeLine, colorWipeLineReverse} from '../components/animation';

const WidthHeight = () => (
  `width: 10vw; height: 10vh;`
);

const PathStatic = () => (
  `fill: black;
  opacity: 0.5;
  stroke: lightgrey;
  stroke-width: 0.5px;
  stroke-dasharray: 125;
  stroke-dashoffset: -125;
  stroke-linecap: butt;
  transition: all 0.3s ease-out;`
);

const PathHover = () => (
  `opacity: 1;
  stroke-dashoffset: 0;
  stroke-dasharray: 125;
  `
);

export const Line = ({
  rotate, color
}) => (
  <StyledLine viewBox="0 0 1920 171" fill="none" xmlns="http://www.w3.org/2000/svg" color={color} rotate={rotate}>
    <path id='line-path' d="M0 171L1920 0V171H0Z" />
  </StyledLine>
);

export const Linkedin = () => (
  <StyledLinkedin viewBox="0 0 32 32" id="linkedin">
    <path 
      id='linkedin-path' 
      d="M19.4999535,0.500046492 C19.9062028,0.500046492 20.2577644,0.648483876 20.5546385,0.94535793 C20.8515125,1.24223198 20.9999499,1.59379365 20.9999499,2.00004292 L20.9999499,20 C20.9999499,20.4062493 20.8515125,20.7578109 20.5546385,21.054685 C20.2577644,21.351559 19.9062028,21.4999964 19.4999535,21.4999964 L1.49999642,21.4999964 C1.09374715,21.4999964 0.742185492,21.351559 0.445311438,21.054685 C0.148437385,20.7578109 0,20.4062493 0,20 L0,2.00004292 C0,1.59379365 0.148437385,1.24223198 0.445311438,0.94535793 C0.742185492,0.648483876 1.09374715,0.500046492 1.49999642,0.500046492 L19.4999535,0.500046492 Z M3.23436729,18.5000036 L6.3749848,18.5000036 L6.3749848,8.46877749 L3.23436729,8.46877749 L3.23436729,18.5000036 Z M4.7812386,7.10940573 C5.28123765,7.10940573 5.71092365,6.9297189 6.07029803,6.57034452 C6.42967241,6.21097014 6.60935924,5.78909614 6.60935924,5.30472254 C6.60935924,4.82034893 6.42967241,4.39847494 6.07029803,4.03910055 C5.71092365,3.67972617 5.28123765,3.50003934 4.7812386,3.50003934 C4.28123955,3.50003934 3.85936556,3.67972617 3.51561662,4.03910055 C3.17186768,4.39847494 2.99999285,4.82034893 2.99999285,5.30472254 C2.99999285,5.78909614 3.17186768,6.21097014 3.51561662,6.57034452 C3.85936556,6.9297189 4.28123955,7.10940573 4.7812386,7.10940573 Z M17.9999571,18.5000036 L17.9999571,13.0156417 C17.9999571,11.4531456 17.7812074,10.3125229 17.3437086,9.59377481 C16.7499598,8.68752721 15.7343377,8.23440305 14.2968409,8.23440305 C13.5780929,8.23440305 12.9374692,8.40627788 12.3749705,8.75002682 C11.9062216,9.03127615 11.5624727,9.39065053 11.343723,9.82814925 L11.2968481,9.82814925 L11.2968481,8.46877749 L8.29685522,8.46877749 L8.29685522,18.5000036 L11.3905978,18.5000036 L11.3905978,13.5312654 C11.3905978,12.750017 11.4999723,12.1562689 11.7187221,11.7500197 C12.0312216,11.2187712 12.5468453,10.9531466 13.2655934,10.9531466 C13.9843414,10.9531466 14.4530903,11.2500206 14.67184,11.8437694 C14.8280894,12.2187686 14.9062145,12.8125174 14.9062145,13.6250152 L14.9062145,18.5000036 L17.9999571,18.5000036 Z">
    </path>         
  </StyledLinkedin>
);

export const Twitter = () => (
  <StyledTwitter viewBox="0 0 24 20" id="twitter">
    <path 
      id='twitter-path' 
      d="M21.5155737,5.12503308 C21.5468239,5.25003302 21.5624486,5.4531573 21.5624486,5.73440663 C21.5624486,7.98440126 21.0155747,10.1562708 19.9218275,12.2500161 C18.7968302,14.4687606 17.2187087,16.2343816 15.1874638,17.5468785 C12.9687193,19.0156247 10.4218499,19.7499982 7.54685701,19.7499982 C4.79686332,19.7499982 2.2812448,19.0156247 0,17.5468785 C0.343748942,17.5781286 0.734373488,17.5937534 1.17187221,17.5937534 C3.45311701,17.5937534 5.49998665,16.89063 7.31248257,15.4843834 C6.21873541,15.4843834 5.2578002,15.1640719 4.42967694,14.5234482 C3.60155367,13.8828245 3.03124301,13.0781394 2.71874352,12.1093914 C3.03124301,12.1406416 3.32811707,12.1562663 3.60936639,12.1562663 C4.04686511,12.1562663 4.48436455,12.1093914 4.92186327,12.0156417 C3.79686595,11.7656425 2.85936818,11.1875184 2.10936997,10.2812708 C1.35937176,9.37502319 0.984372653,8.34377564 0.984372653,7.18752816 L0.984372653,7.09377839 C1.67187125,7.50002766 2.40624402,7.71877666 3.1874924,7.75002682 C2.53124397,7.28127794 1.99999547,6.68752912 1.5937462,5.96878107 C1.18749693,5.25003302 0.984372653,4.46097193 0.984372653,3.60159921 C0.984372653,2.7422265 1.21874709,1.92191596 1.68749598,1.14066758 C2.90624307,2.67191417 4.39842677,3.89066126 6.1640478,4.79690886 C7.92966883,5.70315646 9.81247637,6.20315551 11.8124718,6.29690529 C11.7499722,5.92190618 11.7187221,5.54690707 11.7187221,5.17190797 C11.7187221,4.29690982 11.9374718,3.47659927 12.3749705,2.71097634 C12.8124692,1.9453534 13.406218,1.34379186 14.1562162,0.906293139 C14.9062145,0.46879442 15.7187123,0.250044703 16.5937104,0.250044703 C17.3124585,0.250044703 17.9765196,0.390669368 18.5858932,0.671918698 C19.1952667,0.953168027 19.7343279,1.32816713 20.2030768,1.79691602 C21.3280741,1.5781663 22.3749464,1.18754247 23.3436943,0.625043809 C22.9686952,1.78129129 22.2499472,2.68753889 21.1874495,3.34378733 C22.1249472,3.21878739 23.062445,2.9531635 23.9999428,2.54691423 C23.3124442,3.5469116 22.4843216,4.40628503 21.5155737,5.12503308 Z">
    </path>         
  </StyledTwitter>
);

export const Youtube = () => (
  <StyledYoutube viewBox="0 0 24 20" id="youtube">
    <path 
      id='youtube-path' 
      d="M12.5391 1.40625C12.6328 1.82812 12.7266 2.48438 12.7734 3.32812L12.7969 4.5L12.7734 5.67188C12.7266 6.5625 12.6328 7.19531 12.5391 7.61719C12.4453 7.89844 12.3047 8.13281 12.1172 8.32031C11.9062 8.53125 11.6719 8.67188 11.3906 8.74219C10.9688 8.85938 10.0312 8.92969 8.53125 8.97656L6.39844 9L4.26562 8.97656C2.76562 8.92969 1.80469 8.85938 1.40625 8.74219C1.125 8.67188 0.867188 8.53125 0.679688 8.32031C0.46875 8.13281 0.328125 7.89844 0.257812 7.61719C0.140625 7.19531 0.0703125 6.5625 0.0234375 5.67188L0 4.5C0 4.17188 0 3.77344 0.0234375 3.32812C0.0703125 2.48438 0.140625 1.82812 0.257812 1.40625C0.328125 1.125 0.46875 0.890625 0.679688 0.679688C0.867188 0.492188 1.125 0.351562 1.40625 0.257812C1.80469 0.164062 2.76562 0.0703125 4.26562 0.0234375L6.39844 0L8.53125 0.0234375C10.0312 0.0703125 10.9688 0.164062 11.3906 0.257812C11.6719 0.351562 11.9062 0.492188 12.1172 0.679688C12.3047 0.890625 12.4453 1.125 12.5391 1.40625ZM5.08594 6.42188L8.4375 4.5L5.08594 2.60156V6.42188Z">
    </path>         
  </StyledYoutube>
);


const StyledLine = styled.svg`

  position: relative;
  top: 3px;

  & #line-path{
    animation: ${colorWipeLine} 15s ease infinite;
  }

  //For blue section
  ${props => props.color && css`

  fill: grey;
    // & #line-path{
    //   animation: ${colorWipeLineReverse} 15s ease infinite;
    // }
  `}

  //For rotated version
  ${props => props.rotate && css`
    top:-1px
    transform: rotate(180deg);
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


