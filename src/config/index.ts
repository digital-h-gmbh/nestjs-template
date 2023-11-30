import { localConfig } from './local.config';
import { productionConfig } from './production.config';
import { stagingConfig } from './staging.config';

const env: Environments = (process.env.NODE_ENV as Environments) ?? 'local';

const map = {
  test: localConfig,
  local: localConfig,
  staging: stagingConfig,
  production: productionConfig,
};

export const config = map[env];

// TODO: Replace this with importing `import { Environments } from 'lib';`
type Environments = 'local' | 'staging' | 'production';
