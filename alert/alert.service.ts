import { Injectable } from '@nestjs/common';

@Injectable()
export class AlertService {
  sendAlert(): string {
    return 'Alert sent';
  }
}
