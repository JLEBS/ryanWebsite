import React from 'react';
import Subsection from './subsection';
import { ProfileImage } from './profile-image';
import Footer from './footer';
import { Heading, Subheading, Paragraph, Bold } from './text';
import { FlexColumn, FlexRow, Container } from './wrapper'; 
import {videos, IconContainer} from './video-selector';
import {Line, Dash} from '../img/social-media-images.js';
import { Waypoint } from 'react-waypoint';
import Urls from './urls';

let i = 0;

const handleEnter = () => {
    console.log('Entered');
    console.log(i++);
}

export const SectionOne = () => (
    <Subsection>
        <Dash dash/>
        <Line primaryColor/>
        <Container primary>
            <FlexColumn>
                <Waypoint onEnter={handleEnter}>
                    <Paragraph>
                        <Bold lightFont linkedin href={Urls.ryanLinkedin}>Ryan Callard</Bold> is a British audio visual professional working with independent companies to create high-impact video content for social media platforms including <Bold lightFont youtube href={Urls.ryanYoutube}>YouTube</Bold> and <Bold lightFont twitch href={Urls.ryanTwitch}>Twitch</Bold>.
                    </Paragraph>
                </Waypoint>
                <Waypoint onEnter={handleEnter}>
                    <Paragraph>
                        Born in Somerset, he moved to London in 2010 to study Music Technology at the <Bold lightFont uni href={Urls.uni}>University of West London</Bold>, graduating in 2013. He is a multi-instrumentalist with teaching experience.
                    </Paragraph>
                </Waypoint>
                <Waypoint onEnter={handleEnter}>
                    <Paragraph>
                        In 2018 he co-edited and released <Bold lightFont readyup href={Urls.readyup}>Ready Up: Competitive Team Fortress 2</Bold>, a documentary focused around the competitive TF2 community, which has had over 50,000 views on Youtube, and features interviews from <Bold lightFont href={Urls.paulWiki}>Paul "Redeye" Chaloner</Bold> and other prominent industry figures from CSGO and the Overwatch League.
                    </Paragraph>
                </Waypoint>
                <Waypoint onEnter={handleEnter}>
                    <Paragraph>
                        Outside of esports, Ryan works as a director, writer, and voiceover producer for <Bold lightFont pixel href={Urls.pixel}>Arrogant Pixel</Bold>, an independent game development studio based in West London.
                    </Paragraph>
                </Waypoint>
                <Waypoint onEnter={handleEnter}>
                    <Paragraph>
                        Ryan also volunteers as lead organiser of annual livestream charity event <Bold lightFont hugs href={Urls.hugsSite}>Hugs.tf</Bold>, and as a videographer and editor for <Bold lightFont toth href={Urls.toth}>Tip of the Hats</Bold>.
                    </Paragraph>
                </Waypoint>
            </FlexColumn>
        </Container>
    </Subsection>
)

export const SectionMiddle = () => ( 
    <Subsection neutral>
        <Line rotation/>
        <Dash dash rotation/>
        <Container  neutral> 
            <IconContainer videos={videos}/>
        </Container>
        <Dash dash alternativeColor/>
        <Line alternativeColor/>
    </Subsection>
);

export const SectionTwo = () => (

    <Subsection>
        <Container secondary>
            <FlexRow center>
                {/* Profile Image With Wavy Effect, All credit goes to https://codepen.io/enbee81/ */}
                <ProfileImage/>
            
                <FlexColumn>
                    <Heading>
                        Ryan Callard
                    </Heading>

                    <Subheading lineHeight>
                        Creative Audio and Video Producer
                    </Subheading> 
                    <Subheading lineHeight>
                        ryancallardmusic@gmail.com
                    </Subheading> 
                    {/* SVG animation effect, all credit goes to https://codepen.io/ruandre/pen/howFi */}
                    <Footer/>
                </FlexColumn>
            </FlexRow>
        </Container>
    </Subsection>
)