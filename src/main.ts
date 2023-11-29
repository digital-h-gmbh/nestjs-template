import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT ?? 9999; // TODO: Change port

  app.setGlobalPrefix('v1', { exclude: ['/'] });

  await app.listen(port);
}
bootstrap();
