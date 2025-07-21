import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
            password: string;
        };
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
}
