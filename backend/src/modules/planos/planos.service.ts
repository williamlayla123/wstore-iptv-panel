import { Injectable } from '@nestjs/common';

@Injectable()
export class PlanosService {
  async getAll() {
    return [
      {
        id: 1,
        name: 'Básico',
        price: 29.90,
        duration: 30,
        features: ['50 canais', '10 conexões'],
      },
      {
        id: 2,
        name: 'Premium',
        price: 59.90,
        duration: 30,
        features: ['200+ canais', 'Filmes HD', '20 conexões'],
      },
      {
        id: 3,
        name: 'VIP',
        price: 99.90,
        duration: 30,
        features: ['500+ canais', '4K', 'Suporte 24/7', '50 conexões'],
      },
    ];
  }
}
