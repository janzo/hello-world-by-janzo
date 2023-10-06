<template>
  <div class="jnzwrap">
    <Bar
    :chart-options="CchartOptions"
    :chart-data="CchartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
    />
  </div>
  </template>
  
  <script>
  import { Bar } from './chartLib';
  
  export default {
    name: 'BarChart',
    components: {
      Bar
    },
    props: {
      chartOptions:{
        type:Object,
        default: ()=>{
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
        }
      },


      palette:{
        type: Array,
        default: ()=>{
          // return ['#260c1a', '#f05d23', '#c5d86d', '#f7f7f2', '#f23557', '#f0d43a', '#22b2da', '#3b4a6b']
          return ['#f05d23']
        } 
      },

      titleText: {
        type: String,
        default: 'Doughnut-chart'
      },


      chartData:{
        type:Object
      },
      chartId: {
        type: String,
        default: 'bar-chart'
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


    data() {
      return {

      }
    }
  }
  </script>
  