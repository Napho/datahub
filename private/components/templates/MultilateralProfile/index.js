// @flow
import React from 'react';
import { Div } from 'glamorous';
import { Container } from 'semantic-ui-react';
import Generic from '../Generic';
/* eslint-disable max-len */

type Props = {
  id: string
}
export default ({id}: Props) =>
  (<Generic pathname="/multilateral">
    <Div paddingTop="5em">
      <Container>
        <iframe
          title="oda-donor"
          src={`/${id}.html`}
          frameBorder="0"
          scrolling="no"
          style={{ width: '100%', height: '900px' }}
        />
      </Container>
    </Div>
  </Generic>);