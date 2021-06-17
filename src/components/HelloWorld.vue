<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div style="width:50%; margin-left:auto;margin-right:auto">
Internet stvari (angl. Internet of things) opisuje mrežo več naprav s senzorji, aktuatorji in drugimi programskimi storitvami, z namenom povezovanja in izmenjave podatkov z drugimi napravami in sistemi prek interneta. Naprave interneta stvari so se spremenile zaradi konvergence več tehnologij, pravočasovne analitike, strojnega učenja, senzorjev in vgradnih sitemov.
  </div>
  <br>
  <br>
  <div>
    Izvorna koda projekta je dosegljiva na povezavah:
    <ul>
      <li><a href="https://github.com/TiborKoderman/PLC">https://github.com/TiborKoderman/PLC </a></li> 
      <li><a href="https://github.com/TiborKoderman/plcweb/">https://github.com/TiborKoderman/plcweb/ </a></li>
      <li><a href="https://github.com/TiborKoderman/SocketServer">https://github.com/TiborKoderman/SocketServer </a></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
