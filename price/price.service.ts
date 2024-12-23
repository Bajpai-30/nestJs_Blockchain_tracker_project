import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceService {
  getPrices(): string {
    return 'Price data';
  }
}
