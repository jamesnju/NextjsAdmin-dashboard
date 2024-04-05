"use client"
import Styles from './chart.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {
  
const data = [
  {
    name: 'Mon',
    visit: 4000,
    click: 2400,
  },
  {
    name: 'Tue',
    visit: 1000,
    click: 200,
  },
  {
    name: 'Wen',
    visit: 400,
    click: 400,
  },
  {
    name: 'Thur',
    visit: 42000,
    click: 2410,
  },
  {
    name: 'Fri',
    visit: 2500,
    click: 500,
  },
  {
    name: 'Sat',
    visit: 10000,
    click: 6000,
  },
  {
    name: 'Sun',
    visit: 50000,
    click: 24050,
  },
];
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Weekly Statics</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Chart