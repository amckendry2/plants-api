import { Controller, Get } from '@nestjs/common';
import { Plant } from '@prisma/client';
import { PlantsService } from './plants.service';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get()
  async getAll(): Promise<Plant[]> {
    return this.plantsService.getAll();
  }
}
