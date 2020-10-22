<template>
  <v-app>
    <v-main>
      <Navbar/>
      <div class="chart">
        <line-chart :min="50" :max="100" xtitle="Date" ytitle="Weight" prefix="Kg: " :download="{background: '#fff'}"
          :data="formatData "/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '.././components/Navbar';
import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data: () => ({
        formattedData: {},
  }),
  computed: {
    ...mapGetters({allWeights: 'weight/getAllWeights'}),

    formatData: function(){
      this.allWeights.map(weight=>{
        this.formattedData[weight.date] = weight.weight
    })
    return this.formattedData
    }
  },
  created () {
    this.$store.dispatch('weight/loadAllWeights', {root:true});
  }
};
</script>

<style>
.chart{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
}
</style>