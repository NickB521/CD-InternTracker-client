import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from './DummyData'; // dummy data needs to be changed
import { subWeeks, addDays, format } from 'date-fns';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate, useParams } from 'react-router-dom';

const chartSetting = {
  yAxis: [
    {
      label: 'Worked On (Days)',
    },
  ],
  width: 900,
  height: 400,
};

const BarsDataset = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const startOfWeek = subWeeks(selectedDate, 1);
  const endOfWeek = addDays(startOfWeek, 7);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleNavigation = () => {
    navigate(`/dashboard/${id}/performance`);
  };

  return (
    <div className="app-container">
      <div className="header">
      <h1>Team Progress</h1>
      <div className="filter-container">
      <button className="filter-button" onClick={handleNavigation}>
        Performance
          </button>
          </div>
          </div>
        <div className="main">
          

          <div className="date-picker-container">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMM d, yyyy"
              className="date-picker-input"
            />
            <span>
              Timespan: {format(startOfWeek, 'MMM d, yyyy')} - {format(endOfWeek, 'MMM d, yyyy')}
            </span>
          </div>

          <div className="chart-container">
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
          </div>
        </div>
      </div>
  );
};

export default BarsDataset;
