import styled, {css} from 'styled-components';
import Colors from './colors';

const white = Colors.textColorPrimary;
const black = Colors.textColorSecondary;

const Heading = styled.h1
    `font-size: 100px;
    color: ${white};
    text-shadow: 3px 3px ${black};
    text-transform: uppercase;
    text-align: center;
    ${props => props.primary && css`
    font-size: 24px;
    text-shadow: 1px 1px ${black};
    `}
`;

const Paragraph = styled.p`
    font-size: 24px;
    color: ${Colors.textColorPrimary};
`;

export { Heading, Paragraph }