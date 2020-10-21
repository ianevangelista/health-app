<template>
<v-app>
    <v-main>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            v-on:submit.prevent="login"
        >
            <v-text-field
            v-model="username"
            :rules="nameRules"
            label="Username"
            required
            ></v-text-field>

            <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            @click:append="showPassword = !showPassword"
            ></v-text-field>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="login"
            >
            Login
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            >
            Reset Form
            </v-btn>
            <p v-if="incorrectAuth">Incorrect username or password entered</p>
        </v-form>
    </v-main>
  </v-app>
</template>

<script>

   export default {
    data: () => ({
      valid: true,
      showPassword: false,
      username: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      incorrectAuth: false
    }),

    methods: {
      reset () {
        this.$refs.form.reset();
        this.incorrectAuth = false
      },
      login(){
          this.$store.dispatch('user/login',{
              username: this.username,
              password: this.password
          }, )
          .then(()=>{
              this.$router.push({name: "Home"})
          })
          .catch(err =>{
              console.log(err);
              this.incorrectAuth = true;
          })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>