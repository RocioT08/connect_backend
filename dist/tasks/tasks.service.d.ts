import { PrismaService } from '../prisma/prisma.service';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(userId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        status: string;
        assignee: string | null;
        userId: number;
        createdAt: Date;
    }[]>;
    create(data: any, userId: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        title: string;
        status: string;
        assignee: string | null;
        userId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: any): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        title: string;
        status: string;
        assignee: string | null;
        userId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        title: string;
        status: string;
        assignee: string | null;
        userId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
