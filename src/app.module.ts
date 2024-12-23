import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Import new controllers
import { PriceController } from './price/price.controller';
import { AlertController } from './alert/alert.controller';
import { SwapController } from './swap/swap.controller';

@Module({
  imports: [],
  controllers: [
    AppController, 
    PriceController, 
    AlertController, 
    SwapController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
