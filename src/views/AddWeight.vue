<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-subheader>Prefix for dollar currency</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="Amount"
          value="10.00"
          prefix="$"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Suffix for weight</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="Weight"
          value="28.00"
          suffix="lbs"
        ></v-text-field>
      </v-col>
    </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'AddWeight'
    }
</script>

<style lang="scss" scoped>

</style>