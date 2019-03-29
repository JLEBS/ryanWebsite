import React from 'react';
import YouTube from 'react-youtube';
import drumshack from '../img/drumshack.png';
import guitar from '../img/guitar.png';
import hugs from '../img/hugs.png';
import toth from '../img/toth.png';
import readyup from '../img/readyup.png';
import {IconGroup, IconItem} from './icon.js';

const result = '';
const readyupVid = '7DEvC47tvKc';
const tothVid = 'YiKfsioPpDY';
const hugsVid = 'v4y8tHE83HE';
const drumshackVid = 'ENC_jxNfvLc';
const darylVid = 'rtu_EqjtHmQ';

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');

 
  }


const IconContainer = () => (
    <div>
        <IconGroup>
            <IconItem onClick={handleClick} data-atr={readyupVid} imageUrl={readyup}></IconItem>
            <IconItem data-atr={hugsVid} imageUrl={hugs}></IconItem>
            <IconItem data-atr={tothVid} imageUrl={toth}></IconItem>
            <IconItem data-atr={drumshackVid} imageUrl={drumshack}></IconItem>
            <IconItem data-atr={darylVid} imageUrl={guitar}></IconItem>
        </IconGroup>

        <VideoPlayer/>
    </div>
);

class VideoPlayer extends React.Component {
    render() {
      const opts = {
        height: '390',
        width: '640',
        //playerVars: { // https://developers.google.com/youtube/player_parameters
        //  autoplay: 1
       // }
      };
  
      return (
        <YouTube
          videoId={result}
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
  
    _onReady(event) {
      event.target.pauseVideo();
    }
  }

export default IconContainer;
