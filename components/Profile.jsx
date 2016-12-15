import React from 'react';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Hero from 'grommet/components/Hero';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import SocialShares from './SocialShares';
import backgroundImage from '../src/hero-background.jpg';

const profile = `{
  "name": "Junya Nakazato",
  "job": "Front-End and Back-End Web Developer",
  "live": "Okinawa, Japan",
  "love": [ "League of Legends", "GUILTY GEAR XX ΛCORE" ],
  "frontend": [ "JavaScript", "React", "Material-UI", "Grommet", "jQuery" ],
  "backend": [ "Node", "Ruby", "Java", "PHP", "Objective-C",
    "Rails", "Spring Framework", "FuelPHP" ],
  "infrastructure": [ "AWS", "ECS", "CloudFront", "Docker", "Chef" ],
  "ops": [ "NewRelic", "Datadog", "Sentry" ],
  "tools": [ "Mac", "Vim", "zsh", "Vimperator" , "XCode" ]
}`;

const contents = () => (
  <content>
    <Header fixed={false} float={false} splash={false} style={{ paddingLeft: '1rem' }}>
      <Heading>jey3dayo.net</Heading>
      <Box
        flex
        justify="end"
        direction="row"
        responsive={false}
      />
    </Header>

    <Hero backgroundImage={backgroundImage}>
      <Box colorIndex="grey-2-a" style={{ padding: '1rem' }}>
        <Headline size="small">Who am I ?</Headline>
        <div style={{ whiteSpace: 'pre-wrap' }}>{profile}</div>
        <JSONPretty json={profile} />
      </Box>
      <Box align="end">
        <SocialShares />
      </Box>
    </Hero>

    <Footer justify="between">
      <Paragraph margin="none">© 2016 jey3dayo.net</Paragraph>
    </Footer>
  </content>
);

export default contents;
