import { Controller, Delete } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('reset')
export class PrismaController {
  constructor(private prismaService: PrismaService) {}
  @Delete()
  async resetDatabase() {
    await this.prismaService.repopulate();
  }
}
