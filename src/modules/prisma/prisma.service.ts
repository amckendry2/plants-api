import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async repopulate() {
    await this.order.deleteMany();
    await this.plant.deleteMany();
    await this.$executeRaw`ALTER SEQUENCE "Order_id_seq" RESTART WITH 1`;
    await this.$executeRaw`ALTER SEQUENCE "Plant_id_seq" RESTART WITH 1`;
    return this.plant.createMany({
      data: [
        {
          name: 'Forget-me-not',
          scientificName: 'Myosotis alpestris',
          price: 1.5,
          qty: 15,
          fact: 'State flower of Arizona',
        },
        {
          name: 'Apple blossom',
          scientificName: 'Malus',
          price: 2.0,
          qty: 1,
          fact: 'State flower of Arkansas',
        },
        {
          name: 'Mountain laurel',
          scientificName: 'Kalmia latifolia',
          price: 3.75,
          qty: 40,
          fact: 'State flower of Arizona',
        },
        {
          name: 'Azalea',
          scientificName: 'Rhododendron',
          price: 5.5,
          qty: 100,
          fact: 'State wildflower of Georgia',
        },
        {
          name: 'Violet',
          scientificName: 'Viola',
          price: 1.25,
          qty: 200,
          fact: 'State flower of Illinois',
        },
        {
          name: 'Magnolia',
          scientificName: 'Magnolia',
          price: 0.5,
          qty: 55,
          fact: 'State flower of Louisiana',
        },
        {
          name: 'Sagebrush',
          scientificName: 'Artemisia tridentata',
          price: 6.75,
          qty: 52,
          fact: 'State flower of Nevada',
        },
      ],
    });
  }
}
