import { Controller, Get } from '@nestjs/common';
import { StreamsService } from './streams.service';

@Controller('streams')
export class StreamsController {
  constructor(private streamsService: StreamsService) {}

  @Get()
  async getStreams() {
    return this.streamsService.getAll();
  }
}
