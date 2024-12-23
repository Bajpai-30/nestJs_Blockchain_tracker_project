import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Alert } from './alert.dto'; // Ensure the file path is relative and correct


@ApiTags('Alerts')
@Controller('alerts')
export class AlertController {
  @Post()
  @ApiOperation({ summary: 'Set a price alert' })
  @ApiResponse({ status: 201, description: 'Alert successfully set' })
  createAlert(@Body() alert: Alert): string {
    return `Alert set for ${alert.chain} at target price ${alert.targetPrice}`;
  }
}
