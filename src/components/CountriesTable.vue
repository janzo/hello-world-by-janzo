<template>
    <div class="jnzwrap">
      <b-row>
          <b-col md="4" class=" d-flex justify-content-center align-items-center">
              <b-form-input ref="filter" v-model="filter" placeholder="Search..." class="mr-2"></b-form-input>
              <b-icon icon="search" size="sm"></b-icon>
          </b-col>
          <b-col md="4" class="d-flex justify-content-center align-items-center">

          </b-col>
          <b-col md="2" offset-md="2" class="d-flex justify-content-center align-items-center">
              <b-icon icon="arrows-expand" size="sm"></b-icon>
              <b-form-input type="number" ref="perPage" v-model="perPage" placeholder="" class="mr-2"></b-form-input>
          </b-col>
      </b-row>

      <b-row>
        <b-col>
        <div class="table-responsive">
          <b-table class="my-table"
          :items="countryRows" 
          :fields="tableFields" 
          :stacked="'sm'"
          striped 
          bordered
          :filter="filter"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :per-page="perPage"
          :current-page.sync="currentPage" 
          >
            <template #cell(flag)="fla">
              <div @mouseover="showTooltip(fla.item.country_code)" @mouseleave="hideTooltip(fla.item.country_code)">
                <img :src="fla.item.flags.png" :id="'id-' + fla.item.country_code" height="30">
                <span
                  :id="'tooltip-' + fla.item.country_code"
                  class="custom-tooltip"
                  style="display: none"
                  v-html="getAlt(fla.item.flags)"
                ></span>
              </div>
            </template>

          </b-table>
          <b-pagination
            class="custom-pagination d-flex justify-content-center w-100"
            v-model="currentPage"
            :total-rows="countryRows.length"
            :per-page="perPage"
            aria-controls="b-table"
          ></b-pagination>
          </div>
         </b-col>
      </b-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CountriesTable',
    components:{
    },
    props: {
      countries: {
        type: Array,
        required: true,
      },
    },
    data() {
    return {
      filter: '', 
      sortDesc: false,
      perPage: 10,
      currentPage: 1,
      sortBy: 'country_name',
    };
  },
    computed: {
      tableFields() {
        const sampleCountry = this.countries[0];
        if (!sampleCountry) {
          return [];
        }  
        return [
        {
          key: 'flag',
          label: 'Flag',
          sortable: false, 
        },
        {
          key: 'country_name',
          label: 'Country Name',
          sortable: true, 
        },
        {
          key: 'country_code',
          label: 'Country Code',
          sortable: true, 
        },
        {
          key: 'region',
          label: 'Region',
          sortable: true, 
        },
        {
          key: 'subregion',
          label: 'Subregion',
          sortable: true, 
        },
        {
          key: 'currencies',
          label: 'Currencies',
          sortable: true, 
        },
        {
          key: 'capital',
          label: 'Capital',
          sortable: true, 
        },
        {
          key: 'population',
          label: 'Population',
          sortable: true, 
        },
      ];

      },
      countryRows() {
        return this.countries.map(country => ({
                // ...country,
                country_name: country.name.official || '',
                country_code: country.cca2 || '', 
                region: country.region  || '',
                subregion: country.subregion  || '',
                currencies: typeof country.currencies === 'object' ? Object.keys(country.currencies).join(', ') : '',
                capital: country.capital && country.capital[0] ? country.capital[0] : '',
                population: country.population  || '',
                flags: country.flags  || '',
        }));
      },
    },
    methods: {
      showTooltip(countryCode) {
        document.getElementById('tooltip-' + countryCode).style.display = 'block';
      },
      hideTooltip(countryCode) {
        document.getElementById('tooltip-' + countryCode).style.display = 'none';
      },
      getAlt(flags) {
        let tooltipContent = '';
        let wrap = flags.alt && (flags.svg || flags.png)
        if( wrap ){
          tooltipContent += '<div class="row">';
        }

        if (flags.svg || flags.png) {  
          if( wrap ) tooltipContent += '<div class="col-md-6">';
          if (flags.svg) {
            tooltipContent += `<img src="${flags.svg}" class="img-fluid img-flag" />`;
          } else if (flags.png) {
            tooltipContent += `<img src="${flags.png}" class="img-fluid img-flag"/>`;
          }
          if( wrap ) tooltipContent += '</div>'; 
        }
      
        if (flags.alt) {
          if( wrap ) tooltipContent += '<div class="col-md-6">';
          tooltipContent += flags.alt;
          if( wrap ) tooltipContent += '</div>'; 
        }
        if(wrap){
          tooltipContent += '</div>';
        }
        return tooltipContent;
        },

    },
  };
  </script>
  
  <style scoped>
  .custom-tooltip {
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    z-index: 1000;
  }
  </style>
  