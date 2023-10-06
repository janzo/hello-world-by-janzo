<template>
    <div class="d-flex align-items-center justify-content-center" style="min-height: 80vh;">
      <b-row>
        <b-col lg="4" md="6" sm="12">
            <CountriesPerRegion :countries="countries" ></CountriesPerRegion>
        </b-col>
        <b-col lg="4" md="6" sm="12">
            <CountriesPerCurrencies :countries="countries"></CountriesPerCurrencies>
        </b-col>
        <b-col lg="4" md="6" sm="12">
            <Top10PopolousCountries  :countries="countries"></Top10PopolousCountries>
        </b-col>
<!-- 
        <b-col  lg="4" md="6" sm="12">
            <div class="jnzwrap">
                <radarChart :chartOptions="radarChartOptions" 
                :chartData="CountriesPerRegionDataSet" 
                />
          </div>
        </b-col> -->

      </b-row>
    </div>
  </template>
  <script>
    import CountriesPerRegion from './CountriesPerRegion.vue';
    import CountriesPerCurrencies from './CountriesPerCurrencies.vue';
    import Top10PopolousCountries from './Top10PopolousCountries.vue'
    export default {
        name: 'analyticsPage',
        components: {
            CountriesPerRegion,
            CountriesPerCurrencies,
            Top10PopolousCountries
        },
        props: {
            countries: {
                type: Array,
                required: true,
            },
        },
        computed: {
        },
        data() {
            return {
            };
        },
    };
</script>


  
<style scoped>
</style>
  