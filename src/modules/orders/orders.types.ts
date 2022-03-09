import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { Prisma } from '@prisma/client';

const orderWithPlantName = Prisma.validator<Prisma.OrderArgs>()({
  include: {
    plant: {
      select: {
        name: true,
      },
    },
  },
});

export type OrderWithPlantName = Prisma.OrderGetPayload<
  typeof orderWithPlantName
>;

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  plantId: number;

  @IsNumber()
  @IsNotEmpty()
  qty: number;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
