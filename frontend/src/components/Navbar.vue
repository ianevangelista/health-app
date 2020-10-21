<template>
  <v-card
    class="mx-auto overflow-hidden"
  >
    <v-app-bar
      color="white"
      light
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Health app</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs centered>
          <v-tab to="/">Overview</v-tab>
          <v-tab to="/addWeight">Add Weight</v-tab>
          <v-tab>Add strength session</v-tab>
          <v-tab>Add running session</v-tab>
        </v-tabs>
    </template>

    </v-app-bar>

    
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      temporary
      touch-action: auto    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(item, index) in items" :key="index" @click="action(item.action)">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    name: "Navbar",
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Home',
          icon: 'mdi-home',
          action: 'Home'
        },
        {
          title: 'Account',
          icon: 'mdi-account',
          action: null
        },
        {
          title: 'Log out',
          icon: 'mdi-logout',
          action: 'Logout'
        }
      ]
    }),
    methods: {
      action(action){
        if(action == 'Home')this.$router.push({name: 'Home'});
        else if(action=='Logout'){
          this.$store.dispatch('logout').then(()=>{
          this.$router.push({name: 'Login'});
          });
        }
      }

    }

  }
</script>

<style lang="scss" scoped>

</style>