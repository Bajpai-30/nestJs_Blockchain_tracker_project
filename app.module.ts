import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PriceModule } from './price/price.module';
import { AlertModule } from './alert/alert.module';
import { SwapModule } from './swap/swap.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ErrorHandlingMiddleware } from './middleware/error-handling.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URL || 'mongodb://localhost:27017/default-db'),
    ScheduleModule.forRoot(),
    PriceModule,
    AlertModule,
    SwapModule,
  ],
})
export class AppModule {}
