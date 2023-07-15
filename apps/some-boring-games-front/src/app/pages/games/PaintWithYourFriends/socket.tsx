import { io } from 'socket.io-client';

const socket = io('http://localhost:3000/sockets/paint-with-your-friends');
socket.on('connect', () => {
    console.log('connected');
})

export default socket