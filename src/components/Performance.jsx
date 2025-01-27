import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './DummyData';

const chartSetting = {
  yAxis: [
    {
      label: 'Worked On (Days)',
    },
  ],
  width: 1000,
  height: 600,
  //sx: {
  //  [`.${axisClasses.left} .${axisClasses.label}`]: {
    //  transform: 'translate(-20px, 0)',
    //},
  //},
};

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'student' }]}
      series={[
        { dataKey: 'java', label: 'Java', valueFormatter },
        { dataKey: 'html', label: 'HTML & CSS', valueFormatter },
        { dataKey: 'js', label: 'JS', valueFormatter },
        { dataKey: 'react', label: 'React', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
