import { PrismaService } from '../prisma/prisma.service';
export declare class FeedbackService {
    private prisma;
    constructor(prisma: PrismaService);
    findByUser(userId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        q1: number;
        q2: number;
        userId: number;
        createdAt: Date;
    }[]>;
    create(data: {
        q1: number;
        q2: number;
    }, userId: number): import(".prisma/client").Prisma.Prisma__FeedbackClient<{
        id: number;
        q1: number;
        q2: number;
        userId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        q1: number;
        q2: number;
        createdAt: Date;
    }[]>;
}
