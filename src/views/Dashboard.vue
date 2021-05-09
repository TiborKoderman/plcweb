<template>
<title>Dashboard</title>
  <h1>Dashboard</h1>

  <nav>
    <li v-for="device in devices" :key="device.mac">
      <div>
      <h3>{{device.mac}} [{{device.type}}]</h3>
      <DevicePLC v-bind:mac="device.mac" />
      </div>
    </li>
  </nav>
</template>

<script>
import connection from '../services/socket';
import DevicePLC from '@/components/DevicePLC.vue'

export default {
    name: 'Dashboard',
    components: {DevicePLC},
    data() {
      return {
        connection: null,
        devices: [],
      }
    },
    methods:{

    },
    created(){
      console.log("Transfering websocket connection to the Dashboard view... ")
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

      connection.onmessage= (event)=>{
        let msg = event.data;
        console.log(msg)
        let data = JSON.parse(msg);
        if(data.type === "deviceList")
          this.devices = data.data;
      }
    }
}
</script>

<style>
  
</style>