import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, 
    Tooltip,
    Legend
} from "chart.js";
import '../../App.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


const testData = [
    {location: "rand", occupancy: 50},
    {location: "rec", occupancy: 20},
    {location: "roth", occupancy: 10},
    {location: "zeppos", occupancy: 2},
];

function BarChart(props) {
    const { location } = props
    const [data, setData] = useState([])
    console.log("loc name: " + location)

    const fetchAvgOcc = () => {
      fetch(`/api/getOccTodayAll/${location}`) 
      .then(response => {
          return response.json()
        })
      .then(data => {
          setData(data)
          console.log(data)
      })
    }

    useEffect(() => {
      if(location != undefined && location != "home") {
        fetchAvgOcc()
      }
    }, [])


    console.log("bar chart")
    return (
        <Bar data={{
            labels: data.map(data1 => data1.time), 
            datasets: [
                {
                    label: "Occupancy",
                    data: data.map(data1 => data1.occupancy),
                    backgroundColor: "rgba(255,99,132,,0.2",
                    scale: 30
                }
            ],
            options: {
              responsive: true
            }
        }} />
    );
}

export default BarChart;