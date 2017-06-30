import React from 'react';
import glamorous from 'glamorous';
import { Container, Header, Grid, Icon, Button, Table } from 'semantic-ui-react';
import { red, lightBlack, white } from 'components/theme/semantic';
import Tabs from 'components/molecules/Tabs';
import Pane from 'components/atoms/Pane';
import Overview from 'components/molecules/CountryProfiles/OverviewTab';
import PovertyTab from 'components/molecules/CountryProfiles/PovertyTab';
import PopulationTab from 'components/molecules/CountryProfiles/PopulationTab';
import GovernmentFinanceTab from 'components/molecules/CountryProfiles/GovernmentFinanceTab';
import InternationalResourcesTab from 'components/molecules/CountryProfiles/InternationalResourcesTab';
import InternationalResources from 'components/molecules/CountryProfiles/LowerTabs/InternationalResources';
import GovernmentFinance from 'components/molecules/CountryProfiles/LowerTabs/GovernmentFinance';
import {SectionHeader, Lead} from 'components/molecules/CountryProfiles/Common';
import {LightBg, DarkBg} from 'components/atoms/Backgrounds';

import Generic from '../Generic';
import SearchInput from '../../molecules/SearchInput';

const cardStyles = {
  background: 'rgba(255,255,255,.6)',
  boxShadow: '0 1px 4px rgba(0,0,0,.1)',
  paddingLeft: '1.5em',
  paddingRight: '1.5em',
  paddingBottom: '1.5em',
  paddingTop: '1.5em',
  overflow: 'visible',
};

const CardContainer = glamorous.div(cardStyles);

const SocialIconsContainer = glamorous.div({
  marginTop: '1.5em'
});
const UpperContainer = glamorous.div({
  borderBottom: '2px solid #ddd9dc',
  marginBottom: '.2em',
});
const HeaderContainer = glamorous.div({
  paddingTop: '4em',
  paddingBottom: '4em'
});

const JumpToResource = glamorous.span({
  marginTop: '1.5em',
  display: 'block',
  '& a': {
    color: red
  }
});

export default () =>
  (<Generic pathName="/aid">
    <UpperContainer>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <CardContainer>
                <Header>
                  <Icon name="globe" />
                  <Header.Content>
                    General Picture
                  </Header.Content>
                </Header>
                <SearchInput
                  visible
                  countries={[
                    { name: 'Uganda', id: 1 },
                    { name: 'Kenya', id: 2 },
                    { name: 'Tanzania', id: 3 }
                  ]}
                  placeholder="Uganda"
                />
                <Lead>
                  Explore this in-depth profile of Uganda to
                  find out overall levels of poverty, income distribution,
                  division of wealth and more. Discover how national
                  and sub-national revenue is generated.
                </Lead>
                <JumpToResource>
                  Jump to <a>International resources</a>
                </JumpToResource>
                <SocialIconsContainer>
                  <Button icon="facebook f" />
                  <Button icon="twitter" />
                  <Button icon="google plus" />
                  <Button icon="mail outline" />
                </SocialIconsContainer>
              </CardContainer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </UpperContainer>
    <Tabs selected={0} height="20em">
      <Pane label="Overview">
        <Overview />
      </Pane>
      <Pane label="Poverty">
        <PovertyTab />
      </Pane>
      <Pane label="Population">
        <PopulationTab />
      </Pane>
      <Pane label="Government Finance">
        <GovernmentFinanceTab />
      </Pane>
      <Pane label="International Resources">
        <InternationalResourcesTab />
      </Pane>
    </Tabs>

    <HeaderContainer>
      <Container textAlign="center">
        <SectionHeader>
          EXPLORE <span>DOMESTIC AND INTERNATIONAL RESOURCES</span>
        </SectionHeader>
      </Container>
    </HeaderContainer>
    <Tabs selected={0} textAlign="center" height="60em">
      <Pane label="Government Finance">
        <GovernmentFinance />
      </Pane>
      <Pane label="International Resources">
        <InternationalResources />
      </Pane>
    </Tabs>
    <DarkBg>
      <SectionHeader color={red} fontColor={white}>
        MORE FROM DI ON UGANDA
      </SectionHeader>
    </DarkBg>
    <LightBg>
      <Container>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={16} textAlign="center">
              <SectionHeader color={white}>
                COUNTRY PROFILE DATA SOURCES
              </SectionHeader>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Table basic="very">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Methodology</Table.HeaderCell>
                  <Table.HeaderCell>Unit</Table.HeaderCell>
                  <Table.HeaderCell>Source</Table.HeaderCell>
                  <Table.HeaderCell>Download</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Depth of extreme poverty (poverty gap)</Table.Cell>
                  <Table.Cell>
                    Depth of extreme poverty
                    (also known as the poverty gap) tells
                    us how far people are from the extreme
                    poverty line, on average per country.
                  </Table.Cell>
                  <Table.Cell>World Bank PovcalNet: http://iresearch.worldbank.org/PovcalNet/povDuplicateWB.aspx.</Table.Cell>
                  <Table.Cell>percent</Table.Cell>
                  <Table.Cell>World Bank PovcalNet.</Table.Cell>
                  <Table.Cell><Icon name="file" />ZIP <Icon name="file" />CSV</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Row>
        </Grid>
      </Container>
    </LightBg>
  </Generic>);
