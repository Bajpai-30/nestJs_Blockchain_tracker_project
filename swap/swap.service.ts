import { Injectable } from '@nestjs/common';

@Injectable()
export class SwapService {
  swapTokens(): string {
    return 'Tokens swapped';
  }
}
