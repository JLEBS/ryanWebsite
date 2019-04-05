import React, { useState }  from 'react';
import YouTube from 'react-youtube';
import drumshack from '../img/drumshack.png';
import guitar from '../img/guitar.png';
import hugs from '../img/hugs.png';
import toth from '../img/toth.png';
import readyup from '../img/readyup.png';
import {VideoContainer, IconGroup, IconItem, IconDescription} from './icon.js';
import {Paragraph, Bold, Subheading} from './text.js';
import {FlexRow, MaxWidthContainer} from './wrapper.js';
import Urls from './urls';
import {randomAnimation} from './animation';

export const videos = [
    {
        id : '', 
        image : '', 
        heading : '',
        description : () => '',
        classname : ''
    },
    {
        id : '7DEvC47tvKc', 
        image : readyup, 
        heading : 'Editor',
        description : () => <Paragraph darkFont>Ready Up: Competitive Team Fortress 2 is a documentary produced by Alex "Dashner" Pylyshyn and Ness "Uberchain" Delacroix, and co-edited by Ryan "loris" Callard. Ready Up: Competitive Team Fortress 2 is a behind the scenes narrative of the competitive Team Fortress 2 esports scene, which has maintained a community of pro players, viewers, and talent for over a decade. You can see the update log to Ready Up: Competitive Team Fortress 2 on <Bold readyup href={Urls.readyupLog}>Team Fortress TV</Bold>.</Paragraph>,
        classname : 'activeReadyUp'
    },
    {
        id : 'YiKfsioPpDY',
        image : toth,
        heading : 'Videographer & Video Editor',
        description : () => <Paragraph darkFont>Tip of the Hats is an annual live-streamed gaming charity event benefitting Camp One Step by Children's Oncology Services in Chicago. Tip of the Hats has raised over $1,000,000 through live variety gaming events based in Chicago and Santa Ana, California. During the event, we created behind the scenes content for release during breaks and on social media. To see more from Tip of the Hats, visit <Bold toth href={Urls.toth}>the site</Bold>.</Paragraph>,
        classname : 'activeToth'
    },
    {
        id : 'v4y8tHE83HE',
        image : hugs,
        heading : 'Project Lead',
        description : () => <Paragraph darkFont>Hugs.tf is an annual live-streamed gaming charity event benefitting Special Effect, the UK-based gamers charity. Based in London, Hugs.tf completes 24+ hour gaming marathons featuring the group's favourite game: Team Fortress 2. Since 2013, the event has managed to raise over £42,000 for Special Effect through the combined contributions of the TF2 community. To see more from hugs.tf, <Bold hugs href={Urls.hugsTwitter}>visit the site</Bold> or you can <Bold hugs href={Urls.hugsTwitter}>find us on Twitter</Bold>.</Paragraph>,
        classname : 'activeHugs'
    },
    {
        id : 'ENC_jxNfvLc',
        image : drumshack,
        heading : 'Video Producer',
        description : () => <Paragraph darkFont>Drumshack is a drumming and percussion shop based in Clapham, South London. They release weekly video content featuring product demos, guest speakers, and tips and tricks for the drummer in training. Drumshack's Youtube presence has been slowly growing since 2016, and now has over 450,000 video views. To see more from Drumshack, visit the <Bold drumshack href={Urls.drumshack}>Youtube page</Bold>.</Paragraph>,
        classname : 'activeDrumshack'
    },
    {
        id : 'rtu_EqjtHmQ',
        image : guitar,
        heading : 'Audio Producer & Videographer',
        description : () => <Paragraph darkFont>Daryl Kellie is a West London based fingerstyle guitar player. His book features a number of the techniques that he has become well known for, and we created some performance, lesson, and promotional material for its release. The book is being released through Fundamental Changes later in 2019. To see more from Daryl Kellie, <Bold toth href={Urls.daryl}>visit his site</Bold>.</Paragraph>,
        classname : 'activeGuitar'
    }
];

let isHidden = 'hide';
const show = () => isHidden==='hide' ? isHidden='show' : console.log('Click Event');

export const IconContainer = ({ videos }) => {
    const [videoIndex, setVideoIndex] = useState(0)
    const video = videos[videoIndex];

    return (
      <MaxWidthContainer>
        <IconGroup>
            {videos.map((video, i) => (
                <IconItem
                    key={i} 
                    imageUrl={video.image}
                    onClick={() => {
                        show()
                        setVideoIndex(i)
                    }}
                >
                    {video.Id}
                </IconItem>
            ))}
        </IconGroup>
        
        <FlexRow className={'animated fadeInLeft ' + isHidden}>
            <VideoContainer>
                <YouTube rel="preconnect" videoId={video.id} />
            </VideoContainer>
            <IconDescription>
                <Subheading darkFont>{video.heading}</Subheading>
                <video.description/>
            </IconDescription>
        </FlexRow>
      </MaxWidthContainer>
    )
}