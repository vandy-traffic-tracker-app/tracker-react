import { Bar } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import '../App.css'
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const testData = [
  {location: "rand", occupancy: 50},
  {location: "rec", occupancy: 20},
  {location: "roth", occupancy: 10},
  {location: "zeppos", occupancy: 2},
];

// function BarChart() {
//   return (
//       <Bar data={{
//           labels: testData.map(data1 => data1.location), 
//           datasets: [
//               {
//                   label: "Occupancy",
//                   data: testData.map(data1 => data1.occupancy),
//                   backgroundColor: "rgba(255,99,132,,0.2",
//               }
//           ]
//       }} />
//   );
// }

// export default BarChart;

function BarChart(props) {
  return (
      <Bar 
        data={{
          // labels: fullData.map((data1) => data1.time),
          labels: Array.from(props.barTime),
          datasets: [
            {
              label: "Occupancy",
              // data: fullData.map((data1) => data1.occupancy),
              data: Array.from(props.barOcc),
              backgroundColor: "rgba(255,99,132,0.2",
            },
          ],
        }}
      />
  );
}



export default BarChart;
