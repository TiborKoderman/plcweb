import socketio from 'socket.io-client'

const URL = "http://localhost:3000";
const socket = socketio=io(URL, {autoConnect: false});

export default socket;

socket.onAny((event, ...args) => {
    console.log(event, args);
  });