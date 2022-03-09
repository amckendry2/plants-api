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
