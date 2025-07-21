import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(email: string, password: string): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
            password: string;
        };
    }>;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
}
