<template>
  <h1>Dashboard</h1>

  <nav>
    <!-- <li v-for:></li> -->
  </nav>
</template>

<script>
import connection from '../services/socket';

export default {
    name: 'Dashboard',
    data() {
      return {
        //connection: null,
      }
    },
    methods:{

    },
    created(){
      console.log("Transfering websocket connection to the Dashboard view...")
      console.log(connection);
       
      if(connection === null || connection===undefined)
        this.$router.push(`Login`);
      else
      {
        //console.log(typeof(connection));
        //console.log(connection);
        try{connection.send(JSON.stringify({message: `inside app`, objType: `debugMessage`}));}
        catch{
          this.$router.push(`Login`);
        }
      }
    }
}
</script>

<style>
  
</style>