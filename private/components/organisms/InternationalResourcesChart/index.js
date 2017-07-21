import React from 'react';
import { graphql} from 'react-apollo';
import InternationalResourcesChart from './wrapper';
import RESOURCES_QUERY from '../../../graphql/InternationalResourcesOverTime.graphql';
import config from '../../../visboxConfigs/areaTreemapChart';

const withData = graphql(RESOURCES_QUERY, {
  options: (props) => ({
    variables: {
      id: props.id
    }
  }),
  props: ({data}) => {
    const {error, loading} = data;
    if (error) throw new Error(error);
    console.log('resourcesOverTime', data.internationalResources);
    return {
      loading,
      data: data.internationalResources,
      config
    };
  }});


export default withData(InternationalResourcesChart);