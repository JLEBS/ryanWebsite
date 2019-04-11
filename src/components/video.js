import styled, {css} from 'styled-components';
import indexFunction from './z-index';
import Colors from './colors'

export const Video = styled.video`
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100vw;
    min-height: 100vh;
    width: auto;
    height: auto;
    transform: translate(-50%,-50%);
    object-fit: cover;
`;

export const Source = styled.source`
`;

export const VideoContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    &::after{
        content: '';
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: ${Colors.subSectionTwo};
        opacity: 0.3;
        z-index: 0;
        height: 100vh;
        width: 100vw;
    }
`;