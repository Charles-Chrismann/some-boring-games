import socket from "./socket"

export default function PaintWithYourFriends() {
    socket.emit('hello');
    console.log('sent');
    return (
        <div>PaintWithYourFriends</div>
    )
}