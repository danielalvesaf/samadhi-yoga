import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.class.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.class.findUnique({
      where: { id },
    });
  }

  async create(_dto?: any) {
    throw new Error('Not implemented yet');
  }

  async update(_id: number, _dto?: any) {
    throw new Error('Not implemented yet');
  }

  async remove(_id: number) {
    throw new Error('Not implemented yet');
  }
}
