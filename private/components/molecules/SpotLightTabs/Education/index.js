// @flow
import React from 'react';
import { Container, Grid} from 'semantic-ui-react';
import {TabsP, HeaderTitle, TabWrapper} from 'components/atoms/TabsText';
import { P } from 'glamorous';
import TabsToolTip from 'components/molecules/TabsToolTip';
import { NoData } from 'lib/utils/constants';
import type {PageUnit} from 'components/organisms/PagesData';
import {getPageUnitById} from 'components/organisms/PagesData';

type Props = {
  ...SpotLightTabDataQuery,
  pageData: PageUnit[]
}

const Educaton = (props: Props) => {
  const getPageLine = getPageUnitById(props.pageData);
  const teacherRatio = getPageLine('teacher-ratio');
  const stdPassRatio = getPageLine('std-pass-ratio');
  const educationFunding = getPageLine('education-funding');
  if (!props.educationTabRegional) throw new Error('regional education data is missing');
  const educationTabRegional = props.educationTabRegional;
  return (
    <Container>
      <TabWrapper>
        <Grid textAlign={'center'}>
          <Grid.Column computer={5} tablet={16} mobile={16}>
            <HeaderTitle>
              {teacherRatio.title}
            </HeaderTitle>
            <TabsP>
              {educationTabRegional.pupilTeacherRatioGovtSchl &&
              educationTabRegional.pupilTeacherRatioGovtSchl.value
                ? educationTabRegional.pupilTeacherRatioGovtSchl.value
                : NoData}
            </TabsP>
            <p>
              in government schools and
              {educationTabRegional.pupilTeacherRatioGovtSchl &&
              educationTabRegional.pupilTeacherRatioGovtSchl.toolTip
                ? <TabsToolTip {...educationTabRegional.pupilTeacherRatioGovtSchl.toolTip} />
                : ''}
            </p>
            <TabsP>
              {educationTabRegional.pupilTeacherRatioOtherSchl &&
              educationTabRegional.pupilTeacherRatioOtherSchl.value
                ? educationTabRegional.pupilTeacherRatioOtherSchl.value
                : NoData}
            </TabsP>
            <p>
              in all schools
              {educationTabRegional.pupilTeacherRatioOtherSchl &&
              educationTabRegional.pupilTeacherRatioOtherSchl.toolTip
                ? <TabsToolTip {...educationTabRegional.pupilTeacherRatioOtherSchl.toolTip} />
                : ''}
            </p>
          </Grid.Column>
          <Grid.Column computer={5} tablet={16} mobile={16}>
            <HeaderTitle>
              {stdPassRatio.title}
            </HeaderTitle>
            <TabsP>
              {educationTabRegional.studentsPassRate && educationTabRegional.studentsPassRate.value
                ? `${educationTabRegional.studentsPassRate.value} %`
                : NoData}
            </TabsP>
            <p>and is ranked in
              {educationTabRegional.studentsPassRate &&
              educationTabRegional.studentsPassRate.toolTip
                ? <TabsToolTip {...educationTabRegional.studentsPassRate.toolTip} />
                : ''}
            </p>
            <TabsP>
              {educationTabRegional.studentsPassDistrictRank &&
              educationTabRegional.studentsPassDistrictRank.value
                ? educationTabRegional.studentsPassDistrictRank.value
                : NoData}
            </TabsP>
            <P>place overall
              { educationTabRegional.studentsPassDistrictRank &&
                educationTabRegional.studentsPassDistrictRank.toolTip
                ? <TabsToolTip {...educationTabRegional.studentsPassDistrictRank.toolTip} />
                : ''}
            </P>
          </Grid.Column>
          <Grid.Column computer={5} tablet={16} mobile={16}>
            <HeaderTitle>
              {educationFunding.title}
              {educationTabRegional.primaryEducationfunding &&
              educationTabRegional.primaryEducationfunding.toolTip
                ? <TabsToolTip {...educationTabRegional.primaryEducationfunding.toolTip} />
                : ''}
            </HeaderTitle>
            <TabsP>
              {educationTabRegional.primaryEducationfunding &&
              educationTabRegional.primaryEducationfunding.value
                ? `US$ ${educationTabRegional.primaryEducationfunding.value}`
                : NoData}
            </TabsP>
          </Grid.Column>
        </Grid>
      </TabWrapper>
    </Container>
  );
};
export default Educaton;
