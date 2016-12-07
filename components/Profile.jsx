import React from 'react';

import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Hero from 'grommet/components/Hero';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';


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

    <Hero backgroundImage="http://i.imgur.com/spjWbAU.jpg">
      <Box colorIndex="grey-2-a">
        <Card
          heading="Heading"
          description="Hero description text."
          label="label"
          link={<Anchor href="#" primary label="Link" />}
        />
      </Box>
    </Hero>


    <Footer justify="between">
      <Paragraph margin="none">© 2016 jey3dayo.net</Paragraph>
    </Footer>
  </content>
);

export default contents;
