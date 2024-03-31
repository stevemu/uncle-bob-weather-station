import { execSync } from 'child_process';
import { config as testConfig } from '../configs/test.config.ts';

/**
 * This script is used to migrate the database for test environments.
 * To be used when schema is changed.
 * This script create the migration SQL scripts and apply them test.db and updated prisma client in node_modules.
 */

// create sql migration scripts, generate prisma client and apply the migration to test.db
execSync(`DATABASE_URL="${testConfig.databaseUrl}" npx prisma migrate dev --name update`, {
  stdio: 'inherit',
});
