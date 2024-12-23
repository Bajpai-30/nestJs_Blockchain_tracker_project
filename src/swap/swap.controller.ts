import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Alert } from '../alert/alert.dto'; // Correct relative path


@ApiTags('Swap Rate')
@Controller('swap-rate')
export class SwapController {
  @Post()
  @ApiOperation({ summary: 'Get swap rate', description: 'Get the swap rate for converting Ethereum to Bitcoin' })
  @ApiResponse({
    status: 200,
    description: 'Swap rate and fee details',
    schema: {
      type: 'object',
      properties: {
        btcAmount: { type: 'number', example: 0.0412 },
        fee: {
          type: 'object',
          properties: {
            eth: { type: 'number', example: 0.045 },
            usd: { type: 'number', example: 150.34 },
          },
        },
      },
    },
  })
  getSwapRate(@Body() body: { ethAmount: number }): object {
    const btcAmount = body.ethAmount * 0.0412; // Dummy calculation
    return {
      btcAmount,
      fee: { eth: 0.045, usd: 150.34 },
    };
  }
}

export default SwapController; // Ensure the class is exported
