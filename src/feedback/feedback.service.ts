import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  // GET all feedbacks for the authenticated user
  findByUser(userId: number) {
    return this.prisma.feedback.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  // POST create new feedback
  create(data: { q1: number; q2: number }, userId: number) {
    return this.prisma.feedback.create({
      data: {
        q1: data.q1,
        q2: data.q2,
        user: {
          connect: { id: userId },
        },
      },
    });
  }

async findAll() {
  return this.prisma.feedback.findMany({
    select: {
      q1: true,
      q2: true,
      createdAt: true,
    },
  });
}
}
