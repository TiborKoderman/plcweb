<template>
<div>
    <h1>This is the login page</h1>

    <form @submit.prevent>
        <label for="username">USERNAME: </label><input v-model="user.username" id="user"/><br>

        <label for="password">PASSWORD: </label><input  v-model="user.password" type="password" id="password"><br>
        <div style="font-weight:bolder; color:red;">{{err}}</div>
        <!-- <button @click="err++"></button> -->
        <button @click="submitMeth" type="submit">Submit</button>
    </form>
</div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data() {
      return{
          connection: null,
          user:{
              username: "",
              password: "",
          },
          err: "a",
          
      }
  },

  methods:{
    submitMeth(){
        console.log("Starting connection to WebSocket Server")
        this.connection = new WebSocket("ws://koderman.net:8088")
        //username = document.getElementById("username");

        this.connection.onmessage = function(event) {
            let msg = event.data;
            //console.log(msg)
            if(msg === "success")
            {
                this.$emit();
                console.log(event);
            }
            if(msg===`User not found`)
            {
                console.log(`User not found`);
                //vue.set(data,err,msg)
                //this.err=msg;
                Vue.set(this,'err',msg);
                console.log(this.err);
                //this.connection.close();
            }
        }

        this.connection.onopen = (event) => {
            console.log(event)
            console.log("Successfully connected to the websocket server...")
            //this.connection.send(`message`);
            this.connection.send(JSON.stringify(this.user));
        }

    }
  }
}

</script>

<style>

</style>