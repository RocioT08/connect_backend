import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [AuthModule, TasksModule, PrismaModule, FeedbackModule],
})
export class AppModule {}