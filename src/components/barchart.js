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
    
}

export default BarChart;