<template>
  <div class="home">
    <img src="../assets/plc.png" height="480">
    <HelloWorld msg="IoT PLC"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
