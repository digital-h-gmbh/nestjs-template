import { Config } from './config.interface';

export const productionConfig: Config = {
  logger: {
    level: 'info',
    autoLogging: false,
  },
};
