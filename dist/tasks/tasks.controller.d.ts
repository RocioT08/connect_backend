import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(req: any): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        userId: number;
        createdAt: Date;
        title: string;
        status: string;
        assignee: string | null;
    }[]>;
    create(body: any, req: any): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        userId: number;
        createdAt: Date;
        title: string;
        status: string;
        assignee: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        userId: number;
        createdAt: Date;
        title: string;
        status: string;
        assignee: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        userId: number;
        createdAt: Date;
        title: string;
        status: string;
        assignee: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
