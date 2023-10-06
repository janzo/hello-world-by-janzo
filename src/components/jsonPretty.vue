<template>
    <div>
  <!--        :path="'res'"-->
      <vue-json-pretty
          :data="data"
          @click="handleClick">
      </vue-json-pretty>
    </div>
  </template>
  
  <script>
  import VueJsonPretty from 'vue-json-pretty'
  import 'vue-json-pretty/lib/styles.css';
  
  export default {
    name: 'jsonPretty',
    props:[
      'data',
    ],
    components: {
      VueJsonPretty
    },
    methods:{
      handleClick: function(
          // clicked
      ){
        // console.log('clicked',clicked);
        return null;
      }
  
    }
  }
  </script>
  