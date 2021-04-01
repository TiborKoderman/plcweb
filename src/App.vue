<template>
  <div id="nav" v-if="this.$route.name!=='Dashboard'">
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link> | 
    <router-link to="/login">Login</router-link>
     <!-- <router-view/> -->
  </div>
  <router-view @connectionSuccessful="handleConnectionSuccessful"></router-view>
 
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      connection: null,
      loggedin: false,
    }
  },
  methods:{
    handleConnectionSuccessful(connection){
      this.loggedin=true;
      this.$router.push('Dashboard');
      console.log(`Successfully connecteted, transfering websocket: `)
      console.log(this.connection);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
