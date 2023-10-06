import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import jsonPretty from '@/components/jsonPretty'
Vue.component('jsonPretty', jsonPretty)

import DoughnutChart from '@/components/DoughnutChart'
Vue.component('DoughnutChart', DoughnutChart)
import BarChart from '@/components/BarChart'
Vue.component('BarChart', BarChart)
import PieChart from '@/components/PieChart'
Vue.component('PieChart', PieChart)
import radarChart from '@/components/radarChart'
Vue.component('radarChart', radarChart)



// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './styles.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
