import React from 'react';
import {Doughnut} from 'react-chartjs-2';

export default function DoughnutChart(props) {
  return (
    <div className="chart">
      <Doughnut data={{
        labels: props.data.map((x) => x.day),
        datasets: [{
        label: "Percentage of Saved Tracks",
        backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)'
        ],
        borderColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)'
        ],
        data: props.data.map((x) => x.percentage),
        }]
    }}/>
    </div>
  );
}