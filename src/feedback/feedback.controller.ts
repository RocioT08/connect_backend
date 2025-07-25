import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: { q1: number; q2: number }, @Req() req) {
    return this.feedbackService.create(body, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req) {
    return
     this.feedbackService.findByUser(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAllFeedbacks() {
    return this.feedbackService.findAll();
  }
}
