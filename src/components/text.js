import styled, {css} from 'styled-components';
import Colors from './colors';
import { fluidRange } from 'polished';

const light = Colors.light;
const dark = Colors.dark;

const TextColorChange = (textColor) => (`
  ${textColor === 'light' ? `color: ${light}` : `color: ${dark}; text-shadow: none;`}
`);

const hoverGradient = (left, right, light) => {
  return `   
    background-image: linear-gradient(
      to right,
      ${Colors[left]},
      ${Colors[right]} 50%,
      ${light
          ? Colors['light']
          : Colors['dark']} 50%
      );`
}

export const Heading = styled.h1`
  ${TextColorChange('light')}
    text-align: center;
    display: inline-block;
    text-transform: uppercase;

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

export const ShadowHeading = styled(Heading)`
    text-shadow: 5px 5px ${dark};
    animation-duration: 2s;
`
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

  ${props => props.lineHeight && css`
    ${fluidRange(
      {
        prop: 'line-height',
        fromSize: '30px',
        toSize: '60px',
      },
      '400px',
      '1500px',
    )}
  `}
`;

export const ShadowSubHeading = styled(Subheading)`
    text-shadow: 3px 3px ${dark};
    animation-duration: 2.5s;
  `;

export const Paragraph = styled.p`
    max-width:950px;
    text-align: center;
    margin:12px;
    color: ${light};
    padding: 10px;

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
        text-align: left;

        ${fluidRange(
          {
            prop: 'font-size',
            fromSize: '14px',
            toSize: '22px',
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
            fromSize: '0px',
            toSize: '0px',
          },
          '400px',
          '1500px',
        )}
        @media (max-width: 1300px){
          margin: 0px;
          padding: 0px;
        }
    `}

    @media (max-width: 500px){
      text-align: justify;
    }
`;

export const Bold = styled.a.attrs({
    target: '_blank',
    rel: 'noreferrer noopener',
    })`

    font-weight: 600;
    font-size: 110%;
    text-decoration: inherit;
    text-decoration: none;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;

    //Default
    ${props => hoverGradient('light', 'toth', props.lightFont)}

    // Light text only
    ${props => props.youtube && css`
      ${hoverGradient('light', 'youtube', props.lightFont)}
    `}

    ${props => props.twitch && css`
      ${hoverGradient('light', 'twitch', props.lightFont)}
    `}

    ${props => props.linkedin && css`
      ${hoverGradient('light', 'linkedin', props.lightFont)}
    `}

    ${props => props.uni && css`
      ${hoverGradient('light', 'uni', props.lightFont)}
    `}

    ${props => props.pixel && css`
      ${hoverGradient('light', 'pixel', props.lightFont)}
    `}

    //Light and dark text
    ${props => props.readyup && css`
      ${hoverGradient('readyup', 'readyupSecondary', props.lightFont)}
    `}

    ${props => props.hugs && css`
      ${hoverGradient('hugs', 'hugsSecondary', props.lightFont)}
    `}

    ${props => props.toth && css`
      ${hoverGradient('toth', 'tothSecondary', props.lightFont)}
    `}

    ${props => props.drumshack && css`
      ${hoverGradient('dark', 'drumshack', props.lightFont)}
    `}

	    background-size: 200% 100%;
	    background-position: 100%;

    &:hover{
        transition: all 0.6s cubic-bezier(0.000, 0.000, 0.230, 1);
        background-position: 0%;
    }  
`;