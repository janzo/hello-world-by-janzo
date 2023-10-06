<template>
    <div class="jnzwrap">
        <Pie
        :chart-options="CchartOptions"
        :chart-data="CchartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
        />

        <vue-json-pretty v-if="0" :data="chartData"/>
    </div>
  </template>
  
  <script>

  import VueJsonPretty from 'vue-json-pretty';

  
  import { Pie } from './chartLib';
  
  export default {
    name: 'PieChart',
    components: {
    VueJsonPretty,
    Pie,

},
    props: {
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
        titleText: {
        type: String,
        default: 'pie-chart'
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
      chartId: {
        type: String,
        default: 'pie-chart'
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
    },
    data() {
      return {

      }
    },
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

    }
  }
  </script>
  