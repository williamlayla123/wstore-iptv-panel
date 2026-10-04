import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<string, any> = process.env;

  get(key: string): any {
    return this.envConfig[key];
  }
}
