import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/monokai.css';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Hero from 'grommet/components/Hero';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import SocialShares from './SocialShares';
import backgroundImage from '../src/hero-background.jpg';

const profile = `{
  "name": "Junya Nakazato",
  "job": "Front-End and Back-End Web Developer",
  "live": "Okinawa, Japan",
  "love": [ "League of Legends", "GUILTY GEAR XX ΛCORE and Xrd" ],
  "frontend": [ "React.js", "Material-UI", "React Native" ],
  "backend": [ "Next.js", "Rails", "Java", "PHP", "Objective-C",
    "Spring Framework" ],
  "infrastructure": [ "AWS", "ECS", "CloudFront", "Docker", "chef" ],
  "ops": [ "CircleCI", "New Relic", "Datadog", "Sentry" ],
  "tools": [ "Mac", "Vim", "zsh", "XCode", "Vimperator" ]
}`;

const contents = () => (
  <content>
    <Header fixed={false} float={false} splash={false} pad="small">
      <Heading>jey3dayo.net</Heading>
    </Header>

    <Hero background={<Image src={backgroundImage} fit="cover" full />} size="large">
      <Box direction="row">
        <Box basis="1/2" />
        <Box basis="1/2" pad="medium">
          <Box colorIndex="grey-2-a" pad="small">
            <Headline size="small">Who am I ?</Headline>
            <Highlight className="json-of-snippet bgInherit">{profile}</Highlight>
          </Box>
          <Box colorIndex="grey-2-a" align="end">
            <SocialShares />
          </Box>
        </Box>
      </Box>
    </Hero>

    <Footer justify="between" pad="small">
      <Paragraph>
        <span role="img" aria-label="copyright">
          ©
        </span>
        2017 jey3dayo.net
      </Paragraph>
    </Footer>
  </content>
);

export default contents;
