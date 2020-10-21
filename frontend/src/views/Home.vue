<template>
  <v-app>
    <v-main>
      <Navbar/>
      <h1>All weights:</h1>
      <h3 v-for="(weight, index) in allWeights" v-bind:key="index">
        <span>{{"Your weight the " + weight.date +' was '}}</span>
        {{weight.weight +' kg'}}
        </h3>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '.././components/Navbar';
import {mapState} from 'vuex';
export default {
  name: 'Home',
  components: {
    Navbar
  },
  computed: {
    ...mapState('user', 
    {
      allWeights: state => state.allWeights
    }
    )
  },
  created () {
    this.$store.dispatch('weight/loadAllWeights', {root:true});
  },
};
</script>
