import styled, {css} from 'styled-components';
import Colors from './colors';

const Subsection = styled.div`

    background-color: ${Colors.subSectionOne};
    width: 100%;
    // transform: rotate(-6deg);
    padding-top:5rem;
    padding-bottom:5rem;
    // & > *{
    //     transform: rotate(6deg);
    // }

    & after
        content: 'sdfsdf';
    ${props => props.secondary && css`
        background-color: ${Colors.subSectionTwo};
    
    `}
`



export default Subsection;