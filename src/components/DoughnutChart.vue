<template>
  <div>

    <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
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
  import { Doughnut } from './chartLib';
  
 
  export default {
    name: 'DoughnutChart',
    components: {
      Doughnut
    },
    props: {
      chartOptions:{
        type:Object
      },
      chartData:{
        type:Object
      },
      chartId: {
        type: String,
        default: 'doughnut-chart'
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
        // chartData: {
        //   labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        //   datasets: [
        //     {
        //       backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        //       data: [40, 20, 80, 10]
        //     }
        //   ]
        // },
        // chartOptions: {
        //   responsive: true,
        //   maintainAspectRatio: false
        // }
      }
    }
  }
  </script>
  