<template>
<div>
    <h1>This is the login page</h1>

    <form @submit.prevent>
        <label for="username">USERNAME: </label><input class=loginInputField v-model="user.username" id="user" required/><br>

        <label for="password">PASSWORD: </label><input class=loginInputField v-model="user.password" type="password" id="password" required><br>
        <div style="font-weight:bolder; color:red; font-size:12px">{{err}}</div>
        <button @click="submitMeth" type="submit" class="sbmtBttn">Submit</button>
    </form>
</div>
</template>

<script>
import { onBeforeUnmount } from '@vue/runtime-core';
import connection from '../services/socket';



export default {
  name: 'Login',
  components: {
  },
  data() {
      return{
          err: "",
          user:{
              username: "",
              password: "",
              objType: "loginInfo"
          }
      }
  },

  methods:{
        submitMeth(){
            console.log("Starting connection to WebSocket Server")
                connection.send(JSON.stringify(this.user));

                connection.onmessage = (event) => {
            let msg = event.data;
            //console.log(msg)
            if(msg === `Login success`)
            {
                this.$emit(`connectionSuccessful`,connection);
                console.log(event);
                //document.cookie = JSON.stringify(user);
            }
            if(msg===`Username or password is incorrect`)
            {
                this.err=msg;
                console.log(`%c[WARN] ${this.err}`, "color:red");
                //connection.close();
            }
        }

        connection.onopen = (event) => {
            console.log(event)
            console.log("Successfully connected to the websocket server...")
        }
    }

        
    }
}

</script>

<style>
.sbmtBttn{
    border-radius: 10px;
    border: 1px solid black;
    margin: 5px;
    background: white;
    color: #2c3e50;
}
.sbmtBttn:hover{
    cursor: pointer;
    background: #42b983;
    color: white;

}

.loginInputField{
    border-radius: 10px;
    border: 0.5px solid lightgray;
    margin:5px;
    background: white;
}

.loginInputField:focus{
    border: 0.5px solid gray;
}
</style>