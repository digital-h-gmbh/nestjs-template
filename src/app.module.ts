import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { config } from './config';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: config.logger,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
