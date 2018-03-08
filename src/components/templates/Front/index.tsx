import * as React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';
import { Div } from 'glamorous';
import GlobalPictureNavTabs from '../../organisms/NavBarTabs/globalPicture';
import {GlobalPictureSearch} from '../../molecules/SearchInput';
import { red } from '../../theme/semantic';
import {StateToShare} from '../../molecules/ChartShare';
import About from '../../molecules/About';
import DynamicMap from '../../organisms/Map/DynamicMap';
import { cacheMapData } from '../../../utils';
import Router from 'next/router';
import Generic from '../Generic';

interface Props  {
  state: StateToShare;
}

export default class Front extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    cacheMapData('/worker_gp.js');
  }
  public render() {
    // this casting is a hack, typescript coundnt infar this
    const navState = {state: this.props.state};
    return (
      <Generic>
        <GlobalPictureSearch />
        <Container>
          <Div paddingTop={'2em'} paddingBottom={'2em'} fontSize={'1.2rem'}>
            <Grid centered>
              <Grid.Column width={8} textAlign="center">
                <b>
                  <Icon name="pie graph" />The Development Data Hub{' '}
                </b>{' '}
                is the most comprehensive source for financial resource flow data alongside poverty,
                social and vulnerability indicators.{' '}
                <a href="#about" style={{color: red}}>Read more about the data hub.</a>
              </Grid.Column>
            </Grid>
          </Div>
        </Container>
        <div style={{ position: 'relative' }}>
          <GlobalPictureNavTabs {...navState} />
          {process.env.NODE_ENV !== 'test' && (process as any).browser ?
            <DynamicMap country="global" state={this.props.state} /> : ''
          }
        </div>
        <About router={Router} />
      </Generic>
    );
  }
}
