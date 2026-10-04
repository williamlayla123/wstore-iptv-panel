import { Controller, Get } from '@nestjs/common';
import { PlanosService } from './planos.service';

@Controller('planos')
export class PlanosController {
  constructor(private planosService: PlanosService) {}

  @Get()
  async getPlanos() {
    return this.planosService.getAll();
  }
}
