import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { Prisma, Order } from '@prisma/client';
import { PlantsService } from '../plants/plants.service';
import { OrdersService } from './orders.service';
import { OrderWithPlantName } from './orders.types';

@Controller('orders')
export class OrdersController {
  constructor(
    private ordersService: OrdersService,
    private plantsService: PlantsService,
  ) {}

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<OrderWithPlantName> {
    return this.ordersService.findOrder({
      where: { id: Number(id) },
    });
  }

  @Post()
  async createOrder(
    @Body()
    reqData: {
      plantId: number;
      qty: number;
      username: string;
      address: string;
    },
  ): Promise<OrderWithPlantName> {
    const { qty, plantId, address, username } = reqData;
    const { qty: plantQty, price: plantPrice } =
      await this.plantsService.getById({
        where: { id: Number(plantId) },
      });
    if (plantQty < qty) {
      throw new HttpException('Plant out of stock!', HttpStatus.OK);
    }
    const totalCost = plantPrice * qty;
    const newPlantQty = plantQty - qty;
    const orderInput: Prisma.OrderCreateInput = {
      username,
      address,
      qty,
      totalCost,
      plant: {
        connect: { id: plantId },
      },
    };
    this.plantsService.updateQty({
      where: { id: plantId },
      data: { qty: newPlantQty },
    });
    return this.ordersService.createOrder({
      data: orderInput,
    });
  }
}
