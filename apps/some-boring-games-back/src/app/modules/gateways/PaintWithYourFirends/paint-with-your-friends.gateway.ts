import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  namespace: '/sockets/paint-with-your-friends',
  cors: {
    origin: '*'
  }
})
export class PaintWithYourFriendsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client Connected: ${client.id}`);
  }

  @SubscribeMessage('hello')
  handleMessage(client: any, payload: any): string {
    console.log('hello');
    return 'Hello world!';
  }
}
