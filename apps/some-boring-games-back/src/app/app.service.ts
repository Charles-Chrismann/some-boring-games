import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log('getData');
    return ({ message: 'Hello API' });
  }
}
