import React from 'react';
import styled, {css} from 'styled-components';
import drumshack from '../img/drumshack.png';
import guiter from '../img/guiter.png';
import hugs from '../img/hugs.png';
import readyyo from '../img/readyyo.png';

export const IconGroup = styled.ul`
    display: flex;
    list-style: none;
`

export const IconItem = styled.div`
    ${props => `background-image: url(${props.imageUrl})`}
    background-repeat: no-repeat;
    background-position: center;
`