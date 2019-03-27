import styled, {css} from 'styled-components';
import Colors from './colors';

//Styling for each subsection
const Subsection = styled.div`

    background-color: ${Colors.subSectionOne};
    width: 100%;
    padding-top:5rem;
    padding-bottom:5rem;

    & after
        content: 'sdfsdf';
    ${props => props.secondary && css`
        background-color: ${Colors.subSectionTwo};
    
    `}

    ${props => props.neutral && css`
        background-color: white;

    `}
`

export default Subsection;