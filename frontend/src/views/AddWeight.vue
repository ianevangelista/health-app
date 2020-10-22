<template>
<v-app>
    <v-main>
      <Navbar/>
      <v-form>
      <v-container align="center" justify="center">
      <v-row justify="center">
        <v-col>
          <p class="overline text-center">
            Select a weight: 
          </p>
          <v-select
            v-model="currentWeight.weight"
            :items="weights"
            label="Weight (kg)"
            dense
            outlined
          ></v-select>
          <v-btn @click="saveWeight">
            <v-icon left>
              mdi-content-save
            </v-icon>
            Save
          </v-btn>
        </v-col>
        <v-col>
          <p class="overline text-center">
            Select a date: 
          </p>
          <div class="text-center">
            <v-date-picker v-model="picker" :max="maxDate" />
          </div>
        </v-col>
      </v-row>
    </v-container>
    </v-form>
    </v-main>
  </v-app>
  
</template>

<script>
import Navbar from "../components/Navbar"

  export default {
      name: 'AddWeight',
      components: {
        Navbar
      },
      data: () => ({
        weights: Array(50).fill().map((element, index) =>  (50+index).toFixed(1)),
        picker: new Date().toISOString().substr(0, 10),
        currentWeight: {},
        maxDate: new Date().toISOString().substr(0, 10)
      }),
      methods: {
        saveWeight() {
          return this.$store.dispatch('weight/addWeight', {weight: this.currentWeight.weight, date: this.picker}, {root:true})
        },
      },
      mounted(){
        this.currentWeight = this.$store.getters['weight/getAllWeights'][this.$store.getters['weight/getAllWeights'].length-1];
      }
  }
</script>

<style lang="scss" scoped>
 
</style>