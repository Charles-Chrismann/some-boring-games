import { Module } from '@nestjs/common';
import { PaintWithYourFriendsGateway } from './PaintWithYourFirends/paint-with-your-friends.gateway';

@Module({
  providers: [PaintWithYourFriendsGateway],
})
export class GatewaysModule {}