import { FeedbackService } from './feedback.service';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    create(body: {
        q1: number;
        q2: number;
    }, req: any): import(".prisma/client").Prisma.Prisma__FeedbackClient<{
        id: number;
        q1: number;
        q2: number;
        userId: number;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(req: any): void;
    findAllFeedbacks(): Promise<{
        q1: number;
        q2: number;
        createdAt: Date;
    }[]>;
}
