<template>
    <div>
      <b-carousel
        id="flag-carousel"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="initial"
        img-width="600"
        img-height="400"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Loop through the countries and create carousel slides -->
        <b-carousel-slide
          v-for="(country, index) in sortedCountries"
          :key="index"
          :img-src="country.flags.svg"
          :img-alt="country.flags.alt"
          
          :caption="country.name.common"
          :text="country.name.official"
        ></b-carousel-slide>
      </b-carousel>
  
      <!-- <p class="mt-4"> -->
        <!-- {{ sortedCountries[slide].name.nativeName }}
        {{ sortedCountries[slide] }} -->
        <!-- Slide #: {{ slide }}<br> -->
        <!-- Sliding: {{ sliding }} -->

      <!-- </p> -->
      <VueJsonPretty v-if="0" :data="sortedCountries[slide].name.nativeName"/>

    </div>
  </template>
  
  <script>
  import VueJsonPretty from 'vue-json-pretty';
  import 'vue-json-pretty/lib/styles.css';
  export default {
    name:'flagCarousel',
    components: {
    VueJsonPretty
  },
    data() {
      return {
        slide: 0,
        sliding: true,
         };
    },
    props:{
        countries: null,
    },
    methods: {
      onSlideStart() {
        this.sliding = true;
      },
      onSlideEnd() {
        this.sliding = false;
      },
    },
    computed:{
        sortedCountries(){
            let data = this.countries
            // return data.sort((a, b) => b.population - a.population); // disc
            // return data.sort((a, b) => a.population - b.population); // assc
            return data;
        }
    }
  };
  </script>
  