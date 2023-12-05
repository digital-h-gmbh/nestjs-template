import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT ?? 9999; // TODO: Change port

  app.setGlobalPrefix('v1', { exclude: ['/'] });
  app.useLogger(app.get(Logger));

  await app.listen(port);
}
bootstrap();
