import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Price } from './price.dto'; // Ensure the file path is correct


@ApiTags('Prices')
@Controller('prices')
export class PriceController {
  @Get()
  @ApiOperation({ summary: 'Get hourly prices' })
  @ApiResponse({ status: 200, description: 'A list of hourly prices', type: [Price] })
  getPrices(): Price[] {
    return [
      { chain: 'ethereum', price: 3000.5, createdAt: new Date().toISOString() },
    ];
  }
}
