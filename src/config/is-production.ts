const env: Environments = (process.env.NODE_ENV as Environments) ?? 'local';

export const isProduction = env === 'production';

// TODO: Replace this with importing `import { Environments } from 'lib';`
type Environments = 'local' | 'staging' | 'production';
