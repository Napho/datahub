import * as React from 'react';
import { draw } from '@devinit/charts';

interface Props {
  data: object[];
  config: object;
  width?: string;
  height?: string;
  onClick?: (d: any) => void;
}

class Chart extends React.Component<Props> {
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
      this.chart.onClick(this.props.onClick);
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
