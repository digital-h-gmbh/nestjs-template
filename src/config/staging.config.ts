import { Config } from './config.interface';

export const stagingConfig: Config = {
  serviceName: '$NAME',
  logger: {
    level: 'debug',
    autoLogging: false,
  },
};
