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

const Commons ={
    computed: {
        CchartOptions(){
          return {
            ...this.chartOptions,
            plugins: {
              ...this.chartOptions.plugins,
              title: {
                ...this.chartOptions.plugins.title,
                text: this.titleText,
                display: this.titleText?true:false
              },
            },
          };
        },
        CchartData(){
            return {
                ...this.chartData,
                datasets: this.chartData.datasets.map((dataset) => {
                return {
                  ...dataset,
                  backgroundColor: this.palette,
                };
              }),
            };
          }
  
      },
      props: {
        titleText: {
            type: String,
            default: 'my-chart'
          },
  
        chartId: {
          type: String,
          default: 'my-chart'
        },
        palette:{
            type: Array,
            default: ()=>{
              // return ['#155263', '#ff6f3c', '#ff9a3c', '#ffc93c', '#e7eaf6', '#a2a8d3', '#38598b', '#113f67']
              return ['#260c1a', '#f05d23', '#c5d86d', '#f7f7f2', '#f23557', '#f0d43a', '#22b2da', '#3b4a6b']
            } 
          },

        chartData: {
            type:Object
          },
          chartOptions: {
            type:Object,
            default:() => {
              return{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: false,
                        text: 'titleText assente'
                    }
                }
              }

          },
        },
        datasetIdKey: {
            type: String,
            default: 'label'
          },
          width: {
            type: Number,
            default: 400
          },
          height: {
            type: Number,
            default: 400
          },
          cssClasses: {
            default: '',
            type: String
          },
          styles: {
            type: Object,
            default: () => {}
          },
          plugins: {
            type: Array,
            default: () => []
          }
      }
  

};


export { Doughnut, Bar, Pie, Radar,  ChartJS, Commons };
