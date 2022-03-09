import { Injectable } from '@nestjs/common';
import { Order, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { OrderWithPlantName } from './orders.types';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async getAllOrders(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  async findOrder(params: {
    where: Prisma.OrderWhereUniqueInput;
  }): Promise<OrderWithPlantName> {
    const { where } = params;
    return this.prismaService.order.findUnique({
      where,
      include: {
        plant: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async createOrder(params: {
    data: Prisma.OrderCreateInput;
  }): Promise<OrderWithPlantName> {
    const { data } = params;
    return this.prismaService.order.create({
      data,
      include: {
        plant: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
