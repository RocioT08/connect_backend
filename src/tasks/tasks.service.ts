import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  findAll(userId: number) {
    return this.prisma.task.findMany({
      where: {
        userId, 
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  

  create(data: any, userId: number) {
    return this.prisma.task.create({
      data: {
        title: data.title,
        status: data.status,
        assignee: data.assignee || null,
        user: {
          connect: { id: userId }, 
        },
      },
    });
  }

  update(id: number, data: any) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}