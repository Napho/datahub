// @flow
import { Container, Grid } from 'semantic-ui-react';
import React from 'react';
import Chart from 'components/atoms/Chart';
import {TabsNoData, TabsFootNote, TabsP, HeaderTitle} from 'components/atoms/TabsText';
import { NoData } from 'lib/utils/constants';
import TabsToolTip from 'components/molecules/TabsToolTip';
import type {PageUnit} from 'components/organisms/PagesData';
import {getPageUnitById} from 'components/organisms/PagesData';

type Props = {
  ...TabDataQuery,
  config: any,
  pagesData: PageUnit[],
};

const Poverty = (props: Props) => {
  const getPageLine = getPageUnitById(props.pagesData);
  const povertyReductionCtry = getPageLine('poverty-reduction-ctry');
  const povertyDepthCtry = getPageLine('poverty-depth-ctry');
  const incomeDistributionCtry = getPageLine('income-distribution-ctry');
  if (!props.povertyTab) return new Error('No Poverty data');
  const povertyTab = props.povertyTab;
  //noinspection JSUnresolvedVariable
  return (
    <Container>
      <Grid textAlign={'center'}>
        <Grid.Column computer={5} tablet={16} mobile={16}>
          <HeaderTitle>
            {povertyReductionCtry.title }
            {povertyTab.poverty190Trend && povertyTab.poverty190Trend.toolTip
              ? <TabsToolTip {...povertyTab.poverty190Trend.toolTip} />
              : ''}
          </HeaderTitle>
          {povertyTab.poverty190Trend && povertyTab.poverty190Trend.data
            && povertyTab.poverty190Trend.data.length
            ? <Chart
              config={props.config.area}
              data={povertyTab.poverty190Trend.data}
              height="120px"
            />
            : <TabsNoData />}
        </Grid.Column>

        <Grid.Column computer={5} tablet={16} mobile={16}>
          <HeaderTitle>
            {povertyDepthCtry.title }
            {povertyTab.depthOfExtremePoverty && povertyTab.depthOfExtremePoverty.toolTip
              ? <TabsToolTip {...povertyTab.depthOfExtremePoverty.toolTip} />
              : ''}
          </HeaderTitle>
          <TabsP>
            {povertyTab.depthOfExtremePoverty && povertyTab.depthOfExtremePoverty.value
              ? `${povertyTab.depthOfExtremePoverty.value}%`
              : NoData}
          </TabsP>
          <TabsFootNote>Depth of extreme poverty</TabsFootNote>
        </Grid.Column>

        <Grid.Column computer={5} tablet={16} mobile={16}>
          <HeaderTitle>
            {incomeDistributionCtry.title }
            {povertyTab.incomeDistTrend && povertyTab.incomeDistTrend.toolTip
              ? <TabsToolTip {...povertyTab.incomeDistTrend.toolTip} />
              : ''}
          </HeaderTitle>
          {povertyTab.incomeDistTrend &&
          povertyTab.incomeDistTrend.data &&
          povertyTab.incomeDistTrend.data.length
            ? <div>
              <Chart
                config={props.config.histogram}
                data={povertyTab.incomeDistTrend.data.map((d, i) => i ? d : {...d, color: '#e84439'})}
                height="120px"
              />
              <TabsFootNote textAlign="left" lineHeight={2}>
                <span>Bottom quintile has </span>
                <span>
                  {povertyTab &&
                  povertyTab.incomeDistTrend &&
                  povertyTab.incomeDistTrend.data &&
                  povertyTab.incomeDistTrend.data[0] &&
                  povertyTab.incomeDistTrend.data[0].value ?
                    `${povertyTab.incomeDistTrend.data[0].value.toFixed(1)}% of the income.` : NoData
                  }
                </span>
              </TabsFootNote>
            </div>
            : <TabsNoData />}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Poverty;
