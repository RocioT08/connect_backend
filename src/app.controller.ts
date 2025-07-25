import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
// cSpell:ignore healthz
  @Get('healthz')
  healthCheck() {
    return { status: 'ok' };
  }
}
