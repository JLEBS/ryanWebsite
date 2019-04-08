import styled, {css} from 'styled-components';
import indexFunction from './z-index';

//Styling for each subsection
const Subsection = styled.div`
    width: 100%;
    position: relative;
    ${indexFunction('section')}

    ${props => props.neutral && css`
    background-color: white;
 `}
`
export default Subsection;