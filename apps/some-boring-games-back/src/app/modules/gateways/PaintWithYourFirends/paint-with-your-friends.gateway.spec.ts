import { Test, TestingModule } from '@nestjs/testing';
import { PaintWithYourFriendsGateway } from './paint-with-your-friends.gateway';

describe('PaintWithYourFriendsGateway', () => {
  let gateway: PaintWithYourFriendsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaintWithYourFriendsGateway],
    }).compile();

    gateway = module.get<PaintWithYourFriendsGateway>(
      PaintWithYourFriendsGateway
    );
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
