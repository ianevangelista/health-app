<template>
  <v-app>
    <v-main>
      <Navbar/>
      <h1>All weights:</h1>
      <h3 v-for="(weight, index) in weights" :key="index"><span>{{"Your weight the " + weight.date +' was '}}</span>{{weight.weight +' kg'}}</h3>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '.././components/Navbar';

export default {
  name: 'Home',
  computed: {
    weights(){
      return this.$store.getters.getAllWeights;
    }
  },
  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
