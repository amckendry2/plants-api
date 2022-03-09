import { Module } from '@nestjs/common';
import { PlantsModule } from './modules/plants/plants.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AppController } from './app.controller';

@Module({
  imports: [PlantsModule, OrdersModule, PrismaModule],
  controllers: [AppController],
})
export class AppModule {}
