import React from 'react';
import drumshack from '../img/drumshack.png';
import guitar from '../img/guitar.png';
import hugs from '../img/hugs.png';
import toth from '../img/toth.png';
import readyup from '../img/readyup.png';
import {IconGroup, IconItem} from './icon.js';

const IconContainer = () => (
    <IconGroup>
        <IconItem imageUrl={readyup}></IconItem>
        <IconItem imageUrl={hugs}></IconItem>
        <IconItem imageUrl={toth}></IconItem>
        <IconItem imageUrl={drumshack}></IconItem>
        <IconItem imageUrl={guitar}></IconItem>
    </IconGroup>

);

export default IconContainer;
