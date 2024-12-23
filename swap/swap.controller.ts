import { Controller, Post } from '@nestjs/common';
import { SwapService } from './swap.service';

@Controller('swap')
export class SwapController {
  constructor(private readonly swapService: SwapService) {}

  @Post()
  swapTokens(): string {
    return this.swapService.swapTokens();
  }
}
