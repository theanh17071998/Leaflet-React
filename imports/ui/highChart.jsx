import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 23,
  },
  {
    name: 'Page B', uv: 45,
  },
  {
    name: 'Page C', uv: 56,
  },
  {
    name: 'Page D', uv: 58,
  },
  {
    name: 'Page E', uv: 62,
  },
  {
    name: 'Page F', uv: 57,
  },
  {
    name: 'Page G', uv: 54,
  },
  {
    name: 'Page H', uv: 52,
  },
  {
    name: 'Page J', uv: 51,
  },
  {
    name: 'Page K', uv: 90
  },
  {
    name: 'Page L', uv: 40,
  },
  {
    name: 'Page M', uv: 45,
  },
  {
    name: 'Page O', uv: 56,
  },
  {
    name: 'Page U', uv: 57,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

  render() {
    return (
      <ComposedChart
        width={275}
        height={200}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={10} fill="rgb(255, 214, 0)" />
      </ComposedChart>
    );
  }
}
