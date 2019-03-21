import styled, {css} from 'styled-components';

const Video = styled.video
`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100vw;
    min-height: 100vh;
    width: auto;
    height: auto;
    transform: translate(-50%,-50%);
    type=video/mp4;
    src="./img/videoMain.mp4";
`;

export default Video;