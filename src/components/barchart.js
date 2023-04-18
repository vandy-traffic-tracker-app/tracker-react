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
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


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
