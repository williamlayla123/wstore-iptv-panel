import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Validação global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // CORS
  app.enableCors({
    origin: configService.get('FRONTEND_URL'),
    credentials: true,
  });

  // Prefixo de API
  app.setGlobalPrefix('api/v1');

  const port = configService.get('PORT') || 3001;
  await app.listen(port);
  
  console.log(`🚀 WStore IPTV Backend running on http://localhost:${port}`);
}

bootstrap();
