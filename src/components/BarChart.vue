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
  import { Bar, Commons } from './chartLib';
  
  export default {
    name: 'BarChart',
    components: {
      Bar
    },
    props: {
      ...Commons.props,

      titleText: {
        type: String,
        default: 'Doughnut-chart'
      },
    },

    computed: {
      ...Commons.computed
    },


    data() {
      return {

      }
    }
  }
  </script>
  