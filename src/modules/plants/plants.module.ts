import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';

@Module({
  controllers: [PlantsController],
  providers: [PlantsService, PrismaService],
  exports: [PlantsService],
})
export class PlantsModule {}
