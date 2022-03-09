import { Module } from '@nestjs/common';
import { PlantsModule } from './modules/plants/plants.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';
import config from './config/config';

@Module({
  imports: [
    PlantsModule,
    OrdersModule,
    PrismaModule,
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
  ],
})
export class AppModule {}
