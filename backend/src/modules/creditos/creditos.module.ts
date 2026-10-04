import { Module } from '@nestjs/common';
import { CreditosController } from './creditos.controller';
import { CreditosService } from './creditos.service';

@Module({
  controllers: [CreditosController],
  providers: [CreditosService],
})
export class CreditosModule {}
