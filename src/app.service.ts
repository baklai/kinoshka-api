import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAboutAPI(): string {
    return 'API Kinoshka v1.0';
  }
}
