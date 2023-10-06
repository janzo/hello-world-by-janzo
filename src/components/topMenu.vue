<template>
  <b-navbar toggleable="md" type="dark" class="app-header">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item id="nav-item-table" @click="showTable" :active="pageLocation === 'table'">
          <i class="fas fa-table"></i>
          <template>
            <div class="h2 mb-0">
              <b-icon-table />
            </div>
          </template>
          <b-tooltip target="nav-item-table" title="Show Table"></b-tooltip>
        </b-nav-item>

        <b-nav-item id="nav-item-charts" @click="showCharts" :active="pageLocation === 'graph'">
          <i class="fas fa-chart-bar"></i>
          <template>
            <div class="h2 mb-0">
              <b-icon icon="kanban" class="rotate-180"></b-icon>
            </div>
          </template>
          <b-tooltip target="nav-item-charts" title="Show Charts"></b-tooltip>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <span class="h5 mb-0 d-none d-md-block">{{ loggedInUsername }} </span>
        <b-nav-item id="nav-item-account" @click="showAccount" :active="pageLocation === 'account'">
          <i class="fas fa-user"></i>
          <template>
            <div class="h2 mb-0 ">
              <b-icon-person-circle />
            </div>
          </template>
          <b-tooltip target="nav-item-account" :title="'Update account ' + loggedInUsername"></b-tooltip>
        </b-nav-item>

        <b-nav-item id="nav-item-logout" @click="logout">
          <i class="fas fa-sign-out-alt"></i>
          <template>
            <div class="h2 mb-0">
              <b-icon-power />
            </div>
          </template>
          <b-tooltip target="nav-item-logout" title="Log Out"></b-tooltip>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
  
  <script>
  import { BTooltip } from 'bootstrap-vue';

  export default {
    name:'topMenu',
    components: {
      BTooltip,
    },
    props:{
        loggedInUser: null,
        users: {},
        pageLocation: String,

    },
    methods: {
      showTable() {
        // Chiamare la funzione per mostrare la tabella
        this.$emit('changeLocation', 'table');
      },
      showCharts() {
        this.$emit('changeLocation', 'graph');
        // Chiamare la funzione per mostrare i grafici
      },
      showAccount() {
        // Chiamare la funzione per mostrare l'account
        const payload={method:'update'};
        this.$emit('showAccount', payload);
        // this.$emit('changeLocation', 'account');
      },
      logout() {
        // Chiamare la funzione per il logout
        this.$emit('logout', null);
        this.$emit('changeLocation', 'logout');
        
      },
    },
    computed: {
    loggedInUsername() {
      // Utilizza loggedInUser come chiave per ottenere il nome utente
      return this.users[this.loggedInUser] ? this.users[this.loggedInUser].username : '';
    },
  },
  };
  </script>
  
  <style scoped>
  .app-header {
    background-color: #333;
    color: #fff;
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; 
  }
  .rotate-180 {
    transform: rotate(180deg);
  }
  #top-logo {
  max-height: 52px; 
  display: block;
  margin: 0 auto; 
  padding: 10px; 
}
     
  </style>
  