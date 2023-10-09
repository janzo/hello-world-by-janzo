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

  
  import { Pie,Commons } from './chartLib';
  
  export default {
    name: 'PieChart',
    components: {
    VueJsonPretty,
    Pie,

},
    props: {
      ...Commons.props,
        titleText: {
          type: String,
          default: 'pie-chart'
        },

      chartId: {
        type: String,
        default: 'pie-chart'
      },

    },
    data() {
      return {

      }
    },
      computed:{
        ...Commons.computed,
      }

  }
  </script>
  