import { Injectable } from '@nestjs/common';

@Injectable()
export class StreamsService {
  async getAll() {
    return {
      streams: [],
      message: 'Nenhum stream adicionado ainda',
    };
  }
}
