<template>
  <v-app>
    <v-main>
      <Navbar/>
      <h1>All weights:</h1>
      <h3 v-for="(weight, index) in allWeights" v-bind:key="index">
        <span>{{"Your weight the " + weight.date +' was '}}</span>
        {{weight.weight +' kg'}}
        </h3>
        <weightChart width="500" type="bar" :options="chartOptions" :series="test"/>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Navbar from '.././components/Navbar';
import {mapGetters} from 'vuex';
import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);

Vue.component('weightChart', VueApexCharts)
export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return{
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [],
          }
        },
        series: [{
          name: 'Your weight',
          data: []
        }]
      }
    },
  computed: {
    ...mapGetters({allWeights: 'weight/getAllWeights'})
  },

  created () {
    this.$store.dispatch('weight/loadAllWeights', {root:true});
  }
};
</script>
