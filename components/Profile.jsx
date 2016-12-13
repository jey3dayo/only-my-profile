import React from 'react';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Hero from 'grommet/components/Hero';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Markdown from 'grommet/components/Markdown';

const backgroundImage = '../src/hero-background.jpg';

const profile = `
\`\`\`json
{
  "name": "Junya Nakazato",
  "job": "Front-End and Back-End Web Developer",
  "live": "Okinawa, Japan",
  "love": [ "League of Legends", "GUILTY GEAR XX ΛCORE" ],
  "frontend": [ "JavaScript", "React", "Material-UI", "jQuery" ],
  "backend": [ "Node", "Ruby", "Java", "PHP", "Objective-C",
    "Rails", "Spring Framework", "FuelPHP" ],
  "infrastructure": [ "AWS", "ECS", "CloudFront", "Docker", "Chef" ],
  "ops": [ "NewRelic", "Datadog", "Sentry" ],
  "tools": [ "Mac", "Vim", "zsh", "Vimperator" , "XCode" ]
}
\`\`\`
`;

const contents = () => (
  <content>
    <Header fixed={false} float={false} splash={false}>
      <Heading>jey3dayo.net</Heading>
      <Box
        flex
        justify="end"
        direction="row"
        responsive={false}
      />
    </Header>

    <Hero backgroundImage={backgroundImage}>
      <Box colorIndex="grey-1-a">
        <br />
        <Headline size="small">Profile</Headline>
        <Markdown content={profile} />
      </Box>
    </Hero>

    <Footer justify="between">
      <Paragraph margin="none">© 2016 jey3dayo.net</Paragraph>
    </Footer>
  </content>
);

export default contents;
