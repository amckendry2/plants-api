import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { PlantsService } from '../plants/plants.service';
import { OrdersService } from './orders.service';
import { CreateOrderDto, OrderWithPlantName } from './orders.types';

@Controller('orders')
export class OrdersController {
  constructor(
    private ordersService: OrdersService,
    private plantsService: PlantsService,
  ) {}

  @Get()
  async getAllOrders(): Promise<OrderWithPlantName[]> {
    return this.ordersService.getAllOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<OrderWithPlantName> {
    const order = await this.ordersService.findOrder({
      where: { id: Number(id) },
    });
    if (!order) {
      throw new HttpException(`Order #${id} not found!`, HttpStatus.NOT_FOUND);
    }
    return order;
  }

  @Post()
  async createOrder(
    @Body() reqData: CreateOrderDto,
  ): Promise<OrderWithPlantName> {
    const { qty, plantId, address, username } = reqData;

    const plant = await this.plantsService.getById({
      where: { id: Number(plantId) },
    });

    if (!plant) {
      throw new HttpException(
        `Plant with id:${plantId} not found!`,
        HttpStatus.NOT_FOUND,
      );
    }

    const { qty: plantQty, price: plantPrice } = plant;

    if (plantQty < qty) {
      throw new HttpException('Plant out of stock!', HttpStatus.OK);
    }

    this.plantsService.updateQty({
      where: { id: plantId },
      data: { qty: plantQty - qty },
    });

    return this.ordersService.createOrder({
      data: {
        username,
        address,
        qty,
        totalCost: plantPrice * qty,
        plant: {
          connect: { id: plantId },
        },
      },
    });
  }
}
