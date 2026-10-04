import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientService {
  async generateM3u(userId: string) {
    // Gera M3U personalizado para o cliente
    return `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10

#EXTINF:-1 tvg-id="1" tvg-name="WStore" tvg-logo="https://via.placeholder.com/100" group-title="WStore",WStore Demo
http://localhost:3001/api/v1/client/stream/demo
`;
  }
}
