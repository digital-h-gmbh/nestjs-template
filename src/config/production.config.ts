import { Config } from './config.interface';

export const productionConfig: Config = {
  serviceName: '$NAME',
  logger: {
    level: 'info',
    autoLogging: false,
  },
};
