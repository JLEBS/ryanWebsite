import styled, {css} from 'styled-components';

//Styling for each subsection
const Subsection = styled.div`
    width: 100%;
    position: relative;

    ${props => props.neutral && css`
    background-color: white;
 `}
`
export default Subsection;