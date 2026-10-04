import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { CreditosService } from './creditos.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('creditos')
@UseGuards(JwtAuthGuard)
export class CreditosController {
  constructor(private creditosService: CreditosService) {}

  @Get()
  async getCreditos(@Req() req: any) {
    return this.creditosService.getCreditos(req.user.userId);
  }
}
