import React from "react";
import "./Charts.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Date A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Date B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Date C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Date D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Date E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Date F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Date G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Chart({ customStyle, dataToShow, siteChartData }) {
  return (
    <div className="mainDivCharts" style={customStyle && customStyle}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={800}
          height={500}
          data={dataToShow ? dataToShow : siteChartData ? siteChartData : data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="visits"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="users"
            stackId="2"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="repeating"
            stackId="3"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
