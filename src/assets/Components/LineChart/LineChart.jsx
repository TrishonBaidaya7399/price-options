// import React from 'react';
// import PropTypes from 'prop-types';
import { CartesianGrid, LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
  const usersData= [
    {"id": 1, "year": 2013, "Basic": 100, "Premium": 50, "Family": 50, "Student": 20},
    {"id": 2, "year": 2014, "Basic": 180, "Premium": 80, "Family": 45, "Student": 25},
    {"id": 3, "year": 2015, "Basic": 210, "Premium": 150, "Family": 60, "Student": 37},
    {"id": 4, "year": 2016, "Basic": 200, "Premium": 110, "Family": 70, "Student": 32},
    {"id": 5, "year": 2017, "Basic": 330, "Premium": 270, "Family": 65, "Student": 55},
    {"id": 6, "year": 2018, "Basic": 310, "Premium": 220, "Family": 105, "Student": 40},
    {"id": 7, "year": 2019, "Basic": 380, "Premium": 230, "Family": 90, "Student": 65},
    {"id": 8, "year": 2020, "Basic": 450, "Premium": 260, "Family": 135, "Student": 80},
    {"id": 9, "year": 2021, "Basic": 550, "Premium": 280, "Family": 120, "Student": 93},
    {"id": 10, "year": 2022, "Basic": 450, "Premium": 320, "Family": 135, "Student": 120},
    {"id": 11, "year": 2023, "Basic": 700, "Premium": 350, "Family": 170, "Student": 110}
  ]
  
  
  return (
    <div className="rechart flex flex-col items-center md:my-12 bg-gray-200 p-12 mx-[auto] w-max rounded-xl shadow-2xl border-2 border-gray-300">
    <h1 className='text-4xl text-gray-600 font-bold md:mb-6'>Yearly User Growth (2013-2023)</h1>
    <div>
      <LChart width={800} height={400} data={usersData}>
      <Line type="monotone" dataKey="Basic" stroke="red" />
      <Line type="monotone" dataKey="Premium" stroke="green" />
      <Line type="monotone" dataKey="Family" stroke="blue" />
      <Line type="monotone" dataKey="Student" stroke="orange" />
      <CartesianGrid stroke='#ccc'></CartesianGrid>
      <XAxis dataKey={usersData.Year} fontWeight={1000}></XAxis>
      <YAxis dataKey={usersData.Users} fontWeight={1000}></YAxis>
      </LChart>
    </div>
    </div>
  );
};

LineChart.propTypes = {
  
};

export default LineChart;