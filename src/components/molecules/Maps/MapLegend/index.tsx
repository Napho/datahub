import { Header } from 'semantic-ui-react';
import glamorous, { P, Div, Ul } from 'glamorous';
import * as React from 'react';

export interface LegendField  {
  label?: string;
  color?: string;
  backgroundColor: string;
}

export interface Props  {
  title: string;
  description: string;
  legendData: LegendField[];
}

export interface LegendItemStyleProps  {
  color?: string;
  backgroundColor: string;
}

const LegendContainer = glamorous.div<{length: any; }>(
  {
    position: 'absolute',
    left: '2%',
    width: '18%',
    display: 'flex',
    flexDirection: 'column',
  },
  props => ({
    top: props.length ? `${140 / props.length}%` : '25%',
  }),
);

const LegendKey = glamorous.li(
  {
    fontSize: '.75em',
    padding: '0.5em',
    listStyle: 'none',
    textAlign: 'center',
  },
  (props: LegendItemStyleProps) => ({
    color: props.color ? props.color : 'white',
    backgroundColor: props.backgroundColor,
  }),
);

const Legend = (props: Props) =>
  (<LegendContainer length={props.legendData.length}>
    <Div>
      <Header as="h3">
        {props.title}
      </Header>
      <P justifyContent="center">
        {props.description}
      </P>
    </Div>
    <Div>
      <Ul display={'inline-block'} padding={0}>
        {props.legendData.map(item =>
          (<LegendKey key={item.backgroundColor} {...item}>
            {item.label}
          </LegendKey>),
        )}
      </Ul>
    </Div>
  </LegendContainer>);

export default Legend;
