"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(email, password) {
        const hashed = await bcrypt.hash(password, 10);
        const user = await this.prisma.user.create({
            data: { email, password: hashed },
        });
        return { message: 'User created', user };
    }
    async login(email, password) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user)
            throw new Error('Invalid credentials');
        const valid = await bcrypt.compare(password, user.password);
        if (!valid)
            throw new Error('Invalid credentials');
        const token = jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return { token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map