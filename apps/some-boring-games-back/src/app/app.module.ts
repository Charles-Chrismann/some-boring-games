import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GatewaysModule } from './modules/gateways/gateways.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'dist', 'apps', 'some-boring-games-front'),
    }),
    GatewaysModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
