import { Module } from '@nestjs/common';
import { PlantsModule } from './modules/plants/plants.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PlantsModule, OrdersModule, ConfigModule.forRoot()],
})
export class AppModule {}
