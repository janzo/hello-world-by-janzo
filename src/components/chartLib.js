import { Doughnut, Bar, Pie, Radar } from 'vue-chartjs/legacy';
import { 
    Chart as ChartJS, 
    Title, 
    Tooltip, 
    Legend, 
    CategoryScale,
    BarElement,
    LinearScale,
    ArcElement,
    PointElement,
    LineElement,
    RadialLinearScale


} from 'chart.js';

ChartJS.register(
    Title, 
    Tooltip, 
    Legend, 
    CategoryScale,
    BarElement, 
    LinearScale,
    ArcElement,
    PointElement,
    LineElement,
    RadialLinearScale

);

export { Doughnut, Bar, Pie, Radar,  ChartJS };
