import { Controller, Put } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('reset')
export class PrismaController {
  constructor(private prismaService: PrismaService) {}
  @Put()
  async resetDatabase() {
    await this.prismaService.repopulate();
  }
}
