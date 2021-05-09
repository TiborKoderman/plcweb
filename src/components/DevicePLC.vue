<template>
  <div style="display:inline-block;margin: 10px;">
    <h4>Relay control</h4>
    <label>RELAY 1 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['AC1']">
    <span class="slider round"></span>
    </label><br>

    <label>RELAY 2 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['AC2']">
    <span class="slider round"></span>
    </label><br>

    <label>RELAY 3 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['AC3']">
    <span class="slider round"></span>
    </label><br>

    <label>RELAY 4 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['AC4']">
    <span class="slider round"></span>
    </label><br>
  </div>

  <div style="display:inline-block;margin: 20px;">
    <h4>Opto-coupler control</h4>
    <label>OP-CUP 1 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['DC1']">
    <span class="slider round"></span>
    </label><br>

    <label>OP-CUP 2 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['DC2']">
    <span class="slider round"></span>
    </label><br>

    <label>OP-CUP 3 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['DC3']">
    <span class="slider round"></span>
    </label><br>

    <label>OP-CUP 4 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['DC4']">
    <span class="slider round"></span>
    </label><br>
  </div>

  <div style="display:inline-block;margin: 20px;">
    <h4>GPIO control</h4>
    <label>GPIO 1 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['IO1']">
    <span class="slider round"></span>
    </label><br>

    <label>GPIO 2 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['IO2']">
    <span class="slider round"></span>
    </label><br>

    <label>GPIO 3 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['IO3']">
    <span class="slider round"></span>
    </label><br>

    <label>GPIO 4 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['IO4']">
    <span class="slider round"></span>
    </label><br>

    <label>GPIO 5 </label> 
    <label class="switch">
    <input type="checkbox" v-model="allData['IO5']">
    <span class="slider round"></span>
    </label><br>
  </div>

  <div style="display:inline-block; margin: 20px;">
  
  <div>
    Input 1: {{incommingData["I1"]}}
  </div>
  <div><br>
    Input 2: {{incommingData["I2"]}}
  </div><br>
  <div>
    Input VP:  {{incommingData["VP"]}}
  </div><br>
  <div>
    Input VN:  {{incommingData["VN"]}}
  </div><br>

  </div>

  <div style="display:block; margin: 20px;">
  
  <label for="AO1">Analog Out 1</label><input type="number" pattern="[0-9]{0,4}" id="AO1" v-model="allData['AO1']"> <br>
  <label for="AO2">Analog Out 2</label><input type="number" pattern="[0-9]{0,4}" id="AO2" v-model="allData['AO2']">
  </div>
    
</template>

<script>

import connection from "../services/socket";

export default {
  name: 'DevicePLC',
  props: {
    mac: String,
  },
  data(){
    return{
      physAdrss: this.mac,
      allData:{
        AC1:0,
        AC2:0,
        AC3:0,
        AC4:0,
  
        DC1:0,
        DC2:0,
        DC3:0,
        DC4:0,
  
        IO1:0,
        IO2:0,
        IO3:0,
        IO4:0,
        IO5:0,

        AO1:0,
        AO2:0,
      },
      incommingData:
      {
        I1:0,
        I2:0,
        VP:0,
        VN:0,
      }
    }
    
  },
  mounted()
  {
    connection.onmessage = (event)=> {
      
      let msg = event.data;
      console.log(msg);


      let data = JSON.parse(msg);
      //this.allData.mac = this.mac;
      if(data.objType==="cts")
      {
        this.incommingData.I1 = data.I1;
        this.incommingData.I2 = data.I2;
        this.incommingData.VN = data.VN;
        this.incommingData.VP = data.VP;
      }

    }
  },
  watch: {
      allData:{
        handler:function() {
          console.log(JSON.stringify({"objType":"stc","mac":this.physAdrss,"allData":this.allData}));
          connection.send(JSON.stringify({"objType":"stc","mac":this.physAdrss,"allData":this.allData}));
        },deep: true
      }
  }
}
</script>

<style scoped>
  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin:5px
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>