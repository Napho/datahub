import { Container, Header, Grid, Icon, Button } from 'semantic-ui-react';
import React from 'react';
import {LightBg, HeaderGroup} from './Common';

const Population = () => (
  <LightBg>
    <Grid>
      <Grid.Column width={5}>
        <Header
          textAlign="center"
          as="h3"
        >
          WHAT IS THE POPULATION
        </Header>
        <Header
          textAlign="center"
          as="h1"
          color="red"
        >
          39m
        </Header>
      </Grid.Column>
      <Grid.Column width={5}>
        <Header
          textAlign="center"
          as="h3"
        >
          WHAT IS THE URBAN VS RURAL SPLIT?
        </Header>

      </Grid.Column>

      <Grid.Column width={5}>
        <Header
          textAlign="center"
          as="h3"
        >
          WHAT IS THE AGE PROFILE?
        </Header>
      </Grid.Column>
    </Grid>
  </LightBg>
);

export default Population;