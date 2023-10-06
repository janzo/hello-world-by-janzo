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
      palette:{
        type: Array,
        default: ()=>{
          // return ['#155263', '#ff6f3c', '#ff9a3c', '#ffc93c', '#e7eaf6', '#a2a8d3', '#38598b', '#113f67']
          return ['#260c1a', '#f05d23', '#c5d86d', '#f7f7f2', '#f23557', '#f0d43a', '#22b2da', '#3b4a6b']
        } 
      },

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
  