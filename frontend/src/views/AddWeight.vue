<template>
<v-app>
    <v-main>
      <Navbar/>
      <v-form v-model="valid">
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
            @change="isInputValid"
          ></v-select>
          <v-btn :disabled="disabled" @click="saveWeight">
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
            <v-date-picker @change="isInputValid" v-model="picker"/>
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
        weights: Array(50).fill().map((element, index) => 50+index),
        picker: new Date().toISOString().substr(0, 10),
        currentWeight: {},
        valid: false
      }),
      methods: {
        isInputValid() {
          if(this.currentWeight != null && this.picker != null) this.valid = !this.valid;
        },
        saveWeight() {
          return this.$store.commit('setCurrentWeight', {weight: this.currentWeight.weight, date: this.picker})
        },
      },
      mounted(){
        this.currentWeight = this.$store.getters.getCurrentWeight;
      }
  }
</script>

<style lang="scss" scoped>

</style>