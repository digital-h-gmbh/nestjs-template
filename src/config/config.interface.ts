import { Options as PinoLoggerOptions } from 'pino-http';

export interface Config {
  serviceName: string;
  logger: PinoLoggerOptions;
}
