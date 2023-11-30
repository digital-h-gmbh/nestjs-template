import { Config } from './config.interface';

export const localConfig: Config = {
  serviceName: '$NAME',
  logger: {
    level: 'debug',
    transport: { target: 'pino-pretty' },
    autoLogging: false,
  },
};
