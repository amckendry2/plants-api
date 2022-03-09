import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PlantsModule } from '../plants/plants.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
  imports: [PlantsModule],
})
export class OrdersModule {}
