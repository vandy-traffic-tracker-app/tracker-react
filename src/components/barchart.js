import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, 
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const testData = [
    {location: "rand", occupancy: 50},
    {location: "rec", occupancy: 20},
    {location: "roth", occupancy: 10},
    {location: "zeppos", occupancy: 2},
];

function BarChart() {
    <div style={{padding: "5rem 10 rem"}}>
        <Bar data={{
            labels: testData.map(data1 => data1.location), 
            datasets: [
                {
                    label: "Occupancy",
                    data: testData.map(data1 => data1.occupancy),
                    backgroundColor: "rgba(255,99,132,,0.2",
                }
            ]
        }} />
    </div>
}

export default BarChart;