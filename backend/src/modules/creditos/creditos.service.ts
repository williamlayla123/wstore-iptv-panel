import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditosService {
  async getCreditos(userId: string) {
    return {
      userId,
      creditos: 0,
      lastUpdate: new Date(),
      message: 'Nenhum crédito disponível',
    };
  }
}
