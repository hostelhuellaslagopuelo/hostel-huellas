import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaPg } from "@prisma/adapter-pg";
import { isProduction } from "./env";

const connectionString = process.env.DATABASE_URL ?? "";

// Elegimos el driver según la connection string, sin flags extra:
//   - Producción → Neon (Postgres serverless sobre WebSocket).
//   - Local      → Postgres estándar (pg) contra la base de Docker.
// Así el mismo código sirve para ambos entornos.
const useNeonDriver = connectionString.includes("neon.tech");

const createPrismaClient = () => {
  if (!connectionString && isProduction) {
    throw new Error("[prisma] DATABASE_URL no está definida en producción.");
  }

  const adapter = useNeonDriver
    ? new PrismaNeon({ connectionString })
    : new PrismaPg({ connectionString });

  return new PrismaClient({ adapter });
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (!isProduction) globalForPrisma.prisma = prisma;
