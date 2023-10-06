<template>
  <div id="app">
    <topMenu 
      v-if="isLoggedIn" 
      :key="refreshKey" 
      :users="users" 
      :loggedInUser="loggedInUser" 
      :pageLocation="pageLocation" 
      @showAccount="showAccount" 
      @changeLocation="changeLocation" 
      @logout="logout" 
    />
    <b-container id="main_container">
      <accountComponent 
        ref="account" 
        :countries="countries" 
        :users="users" 
        :loggedInUser="loggedInUser" 
        @updateUser="updateUser" 
        @signup="addUser" 
        @login="login"
      ></accountComponent>
      <div v-if="isLoggedIn">
        <div v-if="countriesLoaded">
          <CountriesTable 
            v-if="pageLocation=='table'" 
            :countries="countries"
          ></CountriesTable>
          <analyticsPage  
            v-if="pageLocation=='graph'" 
            :countries="countries"
          ></analyticsPage>
        </div>
        <div v-else class="text-center mt-5">
          <b-icon icon="circle-notch" variant="primary" font-scale="3" animation="spin"></b-icon>
          <p>Loading, please wait...</p>
        </div>
        <!-- <JsonPretty :data="users"></JsonPretty> -->
      </div>
    </b-container>
  </div>
</template>

<script>
import CountriesTable from './components/CountriesTable.vue'
import analyticsPage from './components/analyticsPage.vue'
import topMenu from './components/topMenu.vue'
import accountComponent from './components/AccountComponent.vue'

import userManagement from './userManagement.js';
// import JsonPretty from './components/jsonPretty.vue';

export default {
  name: 'App',
  components: {
    topMenu,
    accountComponent,
    CountriesTable,
    analyticsPage,
    // JsonPretty
},
  data() {
    return {
      ...userManagement.data,
      countries : Object,
      countriesLoaded : false,
      pageLocation:'table' // graph , account

    };
  },
  methods:{
    ...userManagement.methods,
    changeLocation(location){
          this.pageLocation=location;
        },
    fetchCountries() {
      fetch(
        'https://restcountries.com/v3.1/all'
        // 'https://restcountries.com/v3.1/region/antarctic'
        // 'https://restcountries.com/v3.1/region/europe'
        // 'https://restcountries.com/v3.1/region/americas'
        // 'https://restcountries.com/v3.1/region/asia'
        // 'https://restcountries.com/v3.1/region/africa'
      )
        .then(response => response.json())
        .then(data => {
          this.countries = data;
          this.countriesLoaded = true; 
        })
        .catch(error => {
          console.error('Errore nel recupero dei dati dei Paesi:', error);
        });
    },

  },
  created() {
    this.fetchCountries();
  },
}
</script>

<style>
</style>
