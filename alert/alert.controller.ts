import { Controller, Post } from '@nestjs/common';
import { AlertService } from './alert.service';

@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Post()
  sendAlert(): string {
    return this.alertService.sendAlert();
  }
}
