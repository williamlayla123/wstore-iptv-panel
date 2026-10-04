import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  async getDashboardStats() {
    return {
      totalUsers: 0,
      totalRevendedores: 0,
      totalClientes: 0,
      totalStreams: 0,
      revenueThisMonth: 0,
    };
  }
}
