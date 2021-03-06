import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Plant, Prisma } from '@prisma/client';

@Injectable()
export class PlantsService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Plant[]> {
    return this.prismaService.plant.findMany();
  }

  async getById(params: {
    where: Prisma.PlantWhereUniqueInput;
  }): Promise<Plant> {
    const { where } = params;
    return this.prismaService.plant.findUnique({
      where,
    });
  }

  async updateQty(params: {
    data: Prisma.PlantUpdateInput;
    where: Prisma.PlantWhereUniqueInput;
  }): Promise<Plant> {
    const { data, where } = params;
    return this.prismaService.plant.update({
      data: {
        qty: data.qty,
      },
      where: where,
    });
  }
}
