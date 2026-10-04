import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { ClientService } from './client.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('client')
@UseGuards(JwtAuthGuard)
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get('m3u')
  async getM3u(@Req() req: any) {
    return this.clientService.generateM3u(req.user.userId);
  }
}
