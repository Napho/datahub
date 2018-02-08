import * as React from 'react';
import { draw } from '@devinit/charts';
// import stylesheet from '@devinit/charts/dist/di-charts.min.css';
/* eslint-disable react/no-danger */

interface Props  {
  data: any;
  config: {};
  width?: string;
  height?: string;
}

class Chart extends React.Component {
  public props: Props;
  public element: HTMLDivElement | null;
  public chart: any;

  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    const element = this.element;
    const data = this.props.data;
    const config = this.props.config;
    draw({ element, data, config }).then(chart => {
      this.chart = chart;
    });
  }

  public componentWillUpdate(props: Props) {
    if (this.chart) {
      this.chart.update(props.data);
    }
  }
  public render() {
    return (
      <div
        ref={element => {
          this.element = element;
        }}
        style={{ width: this.props.width, height: this.props.height }}
      />
    );
  }
}

export default Chart;
