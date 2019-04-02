import styled, {css} from 'styled-components';
import Colors from './colors';
import { fluidRange } from 'polished';
import React from 'react';
import { Waypoint } from 'react-waypoint';

const light = Colors.light;
const dark = Colors.dark;
let backgroundColor = '';

const TextColorChange = (textColor) => (`
  ${textColor == 'light' ? `color: ${light}` : `color: ${dark}; text-shadow: none;`}
`);

export const Heading = styled.h1
    `${TextColorChange('light')}
    text-align: center;
    display: inline-block;

    ${props => props.shadow && css`
      text-shadow: 5px 5px ${dark};
    `}

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
    ${TextColorChange('light')}
    text-shadow: none;
    text-align: center;
    display: inline-block;

    ${props => props.shadow && css`
    text-shadow: 2px 2px ${dark};
    `}

    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '19px',
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

    ${props => props.darkFont && css`
      ${TextColorChange('dark')}
  `}
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
    max-width:950px;
    text-align: center;
    margin:12px;
    color: ${light};


    @media (max-width: 500px){
      text-align: justify;
    }

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

      ${props => props.darkFont && css`
      ${TextColorChange('dark')}
      margin: unset;

        ${fluidRange(
          {
            prop: 'font-size',
            fromSize: '14px',
            toSize: '18px',
          },
          '400px',
          '1500px',
        )}
        ${fluidRange(
          {
            prop: 'line-height',
            fromSize: '20px',
            toSize: '24px',
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
    `}
`;

export const Bold = styled.a.attrs({
    target: '_blank',
    })`

    ${props => 
    `href=(${props.href});`}
    font-weight: 600;
    font-size: 110%;
    text-decoration: inherit;
    text-decoration: none;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    // Section 1 Only

    background-image: linear-gradient(
      to right,
	    ${Colors.light},
	    ${Colors.youtube} 50%,
      white 50%
      );



    ${props => props.youtube && css`
    background-image: linear-gradient(
      to right,
	    ${Colors.light},
	    ${Colors.youtube} 50%,
      white 50%
      );
    `}

    ${props => props.twitch && css`
    background-image: linear-gradient(
      to right,
	    ${Colors.light},
	    ${Colors.twitch} 50%,
      white 50%
      );
    `}

    ${props => props.linkedin && css`
    background-image: linear-gradient(
      to right,
	    ${Colors.light},
	    ${Colors.linkedin} 50%,
      white 50%
      );
    `}

    ${props => props.uni && css`
    background-image: linear-gradient(
      to right,
	    ${Colors.light},
	    ${Colors.uni} 50%,
      white 50%
      );
    `}

    ${props => props.pixel && css`
    background-image: linear-gradient(
      to right,
	    ${Colors.light},
	    ${Colors.pixel} 50%,
      white 50%
      );
    `}

    //Both

    ${props => props.readyup && css`
      background-image: linear-gradient(
      to right,
      ${Colors.readyup},
      ${Colors.readyupSecondary} 50%,
      ${props => props.darkFont && css`
      ${backgroundColor = 'black'}`}
      ${props => props.lightFont && css`
      ${backgroundColor = 'white'}`}
        50%
      );
    `}

    ${props => props.hugs && css`
      background-image: linear-gradient(
      to right,
	    ${Colors.hugs},
	    ${Colors.hugsSecondary} 50%,
      ${backgroundColor} 50%
      );
    `}

    ${props => props.toth && css`
      background-image: linear-gradient(
      to right,
	    ${Colors.tothSecondary},
	    ${Colors.toth} 50%,
      ${props => props.darkFont && css`
      ${backgroundColor = 'black'}`}
      ${props => props.lightFont && css`
      ${backgroundColor = 'white'}`}
        50%
      );
    `}

    ${props => props.drumshack && css`
      background-image: linear-gradient(
      to right,
	    ${Colors.dark},
	    ${Colors.drumshack} 50%,
      ${props => props.darkFont && css`
      ${backgroundColor = 'black'}`}
      ${props => props.lightFont && css`
      ${backgroundColor = 'white'}`}
        50%
      );
    `}

	    background-size: 200% 100%;
	    background-position: 100%;

    &:hover{
        transition: all 0.6s cubic-bezier(0.000, 0.000, 0.230, 1);
        background-position: 0%;
        pointer: cursor;
    }  
`;