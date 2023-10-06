<template>
    <div>
        <Pie
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
        
        <!-- <JsonPretty  :data="chartData"/> -->
    </div>
  </template>
  
  <script>

    // import VueJsonPretty from 'vue-json-pretty';
  // import 'vue-json-pretty/lib/styles.css';
  
  import { Pie } from './chartLib';
  
  export default {
    name: 'PieChart',
    components: {
    // VueJsonPretty,
    Pie,

},
    props: {
        chartData: {
            type:Object
        },
        chartOptions: {
            type:Object
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
    }
  }
  </script>
  