import React from 'react';

import { Wrapper, Container } from './wrapper';
import { Heading, Paragraph } from './text';
import Video from './video';
import Footer from './footer';
import Subsection from './subsection';


const HomePage = () => (

<Wrapper>
    {/* <Video></Video> */}
    
    <Container>
        <Heading>
            Ryan Callard
        </Heading>
        <Heading as='h2' primary >
            Creative Producer for Audio and Video content.
        </Heading> 

    </Container>

    <Subsection/>
    <Subsection>
        <Paragraph>
            Ryan Callard is a British audio visual professional working with independent companies to create high-impact video content for social media platforms including YouTube and Twitch.
            Born in Somerset, he moved to London in 2010 to study Music Technology at the University of West London, graduating in 2013. He is a multi-instrumentalist with teaching experience.

            In 2018 he co-edited and released Ready Up: Competitive Team Fortress 2, a documentary focused around the competitive TF2 community, which has had over 50,000 views on Youtube, and features interviews from Paul "Redeye" Chaloner and other prominent industry figures from CSGO and the Overwatch League.

            Outside of esports, Ryan works as a director, writer, and voiceover producer for Arrogant Pixel, an independent game development studio based in West London.

            Ryan also volunteers as lead organiser of annual livestream charity event Hugs.tf, and as a videographer and editor for Tip of the Hats.
        
        </Paragraph>
    </Subsection>
    <Subsection>
        <Paragraph>
            
        </Paragraph>

    </Subsection>

    <Footer>

    </Footer>
</Wrapper>
);

export default HomePage;