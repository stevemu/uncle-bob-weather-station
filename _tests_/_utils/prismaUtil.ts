import { PrismaClient } from '@prisma/client';
import { config } from '../../configs/test.config';

export const testPrismaClient = new PrismaClient({
  datasources: { db: { url: config.databaseUrl } },
});
