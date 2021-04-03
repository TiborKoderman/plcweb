<template>
  <div style="display:inline-block;margin: 10px;">
    <h4>Relay control</h4>
    <label>RELAY 1 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>

    <label>RELAY 2 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>

    <label>RELAY 3 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>

    <label>RELAY 4 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>
  </div>

  <div style="display:inline-block;margin: 20px;">
    <h4>Opto-coupler control</h4>
    <label>OP-CUP 1 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>

    <label>OP-CUP 2 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>

    <label>OP-CUP 3 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>

    <label>OP-CUP 4 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>
  </div>

  <div style="display:inline-block;margin: 20px;">
    <h4>GPIO control</h4>
    <label>GPIO 1 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>

    <label>GPIO 2 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>

    <label>GPIO 3 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>

    <label>GPIO 4 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>

    <label>GPIO 5 </label> 
    <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
    </label><br>
  </div>

  <div style="display:inline-block; margin: 20px;">
  
  <div>
    Input 1: 
  </div>
  <div><br>
    Input 2: 
  </div><br>
  <div>
    Input VP: 
  </div><br>
  <div>
    Input VN: 
  </div><br>

  </div>

  <div style="display:block; margin: 20px;">
  
  <label for="AO1">Analog Out 1</label><input type="number" name="" id="AO1"> <br>
  <label for="AO2">Analog Out 2</label><input type="number" name="" id="AO2">

  </div>
    
</template>

<script>
export default {
  name: 'DevicePLC',
  props: {
    mac: String,
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