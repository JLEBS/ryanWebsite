import styled, {css} from 'styled-components';
import Colors from './colors';
import { fluidRange } from 'polished';


import React from 'react';
import { Waypoint } from 'react-waypoint';

const white = Colors.textColorPrimary;
const black = Colors.textColorSecondary;

export const Heading = styled.h1
    `font-size: 100px;
    color: ${white};
    text-shadow: 5px 5px ${black};
    text-align: center;
    display: inline-block;
    ${fluidRange(
        {
          prop: 'font-size',
          fromSize: '55px',
          toSize: '100px',
        },
        '400px',
        '1500px',
      )}
    ${fluidRange(
        {
          prop: 'line-height',
          fromSize: '120%',
          toSize: '150%',
        },
        '400px',
        '1500px',
      )}
      ${fluidRange(
        {
          prop: 'letter-spacing',
          fromSize: '0px',
          toSize: '10px',
        },
        '400px',
        '1500px',
      )}
`;

export const Subheading = styled.h2`
    font-size: 24px;
    color: ${white};
    text-shadow: 2.5px 2.5px ${black};
    text-align: center;
    display: inline-block;
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '15px',
        toSize: '30px',
      },
      '400px',
      '1500px',
    )}
  ${fluidRange(
      {
        prop: 'line-height',
        fromSize: '30px',
        toSize: '60px',
      },
      '400px',
      '1500px',
    )}
    ${fluidRange(
      {
        prop: 'letter-spacing',
        fromSize: '0px',
        toSize: '2.4px',
      },
      '400px',
      '1500px',
    )}
`;

export const WayPointParagraph = () => (
  <Waypoint 
      onEnter={console.log('enter')}
      onLeave={console.log('leave')}
  >
    <Paragraph></Paragraph>
  </Waypoint>
);

export const Paragraph = styled.p`
    font-size: 24px;
    line-height:32px;
    max-width:950px;
    text-align: center;
    margin:12px;
    color: ${Colors.textColorPrimary};
    ${fluidRange(
        {
          prop: 'font-size',
          fromSize: '16px',
          toSize: '24px',
        },
        '400px',
        '1500px',
      )}
    ${fluidRange(
        {
          prop: 'line-height',
          fromSize: '24px',
          toSize: '32px',
        },
        '400px',
        '1500px',
      )}
      ${fluidRange(
        {
          prop: 'letter-spacing',
          fromSize: '1px',
          toSize: '2px',
        },
        '400px',
        '1500px',
      )}
      ${fluidRange(
        {
          prop: 'margin',
          fromSize: '8px',
          toSize: '16px',
        },
        '400px',
        '1500px',
      )}
`;

export const Bold = styled.a.attrs({
    target: '_blank',
    })`
    ${props => 
    `href=(${props.href});`}
    font-weight: 600;
    color: white;
    font-size: 110%;
    text-decoration: inherit;
    text-decoration: none;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
    	to right,
	    ${Colors.linkHoverLight},
	    ${Colors.linkHover} 50%,
	    white 50%);
	    background-size: 200% 100%;
	    background-position: 100%;

    &:hover{
        transition: all 0.6s cubic-bezier(0.000, 0.000, 0.230, 1);
        background-position: 0%;
        pointer: cursor;
    }
`;