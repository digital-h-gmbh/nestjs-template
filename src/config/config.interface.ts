import { Options as PinoLoggerOptions } from 'pino-http';

export interface Config {
  logger: PinoLoggerOptions;
}
