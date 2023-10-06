<template>
  <div class="jnzwrap">

    <Doughnut
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
    
    <vue-json-pretty v-if="0" :data="CchartData"/>
  </div>
  </template>
  
  <script>
  import { Doughnut, Commons } from './chartLib';
  
  import VueJsonPretty from 'vue-json-pretty';
  
 
  export default {
    name: 'DoughnutChart',
    components: {
      Doughnut,
      VueJsonPretty,
    },

    props: {

      ...Commons.props,

      titleText: {
        type: String,
        default: 'Doughnut-chart'
      },

      chartId: {
        type: String,
        default: 'doughnut-chart'
      },
      
    },
    computed: {
      ...Commons.computed,
    },
    
    data() {
      return {
      }
    }
  }
  </script>
  