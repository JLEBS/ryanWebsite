import React from 'react';
import Subsection from './subsection';
import { ProfileImage } from './profile-image';
import Footer from './footer';
import { Heading, Subheading, Paragraph, Bold, WayPointParagraph } from './text';
import { FlexColumn, FlexRow, Container } from './wrapper'; 
import IconContainer from './video-selector';
import {Line} from '../img/social-media-images.js';


export const SectionOne = () => (
    <Subsection>
        <Line/>
        <Container primary>
            <FlexColumn>
                <Paragraph>
                    <Bold href={'https://www.linkedin.com/in/ryan-callard-682a38130'}>Ryan Callard</Bold> is a British audio visual professional working with independent companies to create high-impact video content for social media platforms including <Bold href='https://www.youtube.com/channel/UCIb7HfJ65qLsxP6w2yvo0rw'>YouTube</Bold> and <Bold href='https://www.twitch.tv/lor_is'>Twitch</Bold>.
                </Paragraph>

                <Paragraph>
                    Born in Somerset, he moved to London in 2010 to study Music Technology at the <Bold href={'https://www.uwl.ac.uk/'}>University of West London</Bold>, graduating in 2013. He is a multi-instrumentalist with teaching experience.
                </Paragraph>

                <Paragraph>
                    In 2018 he co-edited and released <Bold href={'https://www.youtube.com/watch?v=7DEvC47tvKc'}>Ready Up: Competitive Team Fortress 2</Bold>, a documentary focused around the competitive TF2 community, which has had over 50,000 views on Youtube, and features interviews from <Bold href='https://en.wikipedia.org/wiki/Paul_Chaloner'>Paul "Redeye" Chaloner</Bold> and other prominent industry figures from CSGO and the Overwatch League.
                </Paragraph>

                <Paragraph>
                    Outside of esports, Ryan works as a director, writer, and voiceover producer for <Bold href={'http://arrogantpixel.com/'}>Arrogant Pixel</Bold>, an independent game development studio based in West London.
                </Paragraph>

                <Paragraph>
                    Ryan also volunteers as lead organiser of annual livestream charity event <Bold href={'https://hugs.tf/'}>Hugs.tf</Bold>, and as a videographer and editor for <Bold href={'https://tipofthehats.org/'}>Tip of the Hats</Bold>.
                </Paragraph>
            </FlexColumn>
        </Container>
    </Subsection>
)


export const SectionMiddle = () => ( 
    <Subsection neutral>
        <Line rotation/>
        <Container neutral> 
            <IconContainer></IconContainer>
        </Container>
        <Line alternativeColor newClassName='.testing'/>
    </Subsection>
);

export const SectionTwo = () => (


    <Subsection>
        <Container secondary>
            <FlexRow>
            {/* Profile Image With Wavy Effect, All credit goes to https://codepen.io/enbee81/ */}
                <ProfileImage></ProfileImage>
            
                <FlexColumn>
                    <Heading>
                        Ryan Callard
                    </Heading>

                    <Subheading>
                        Creative Audio and Video Producer
                    </Subheading> 
                    <Subheading>
                        ryancallardmusic@gmail.com
                    </Subheading> 

                    <Footer></Footer>
                </FlexColumn>
            </FlexRow>
        </Container>
    </Subsection>
)
