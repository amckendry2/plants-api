import { Controller, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('reset')
export class PrismaController {
  constructor(private prismaService: PrismaService) {}
  @Post()
  async resetDatabase() {
    await this.prismaService.repopulate();
  }
}
