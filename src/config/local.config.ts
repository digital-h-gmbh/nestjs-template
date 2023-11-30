import { Config } from './config.interface';

export const localConfig: Config = {
  logger: {
    level: 'debug',
    transport: { target: 'pino-pretty' },
    autoLogging: false,
  },
};
