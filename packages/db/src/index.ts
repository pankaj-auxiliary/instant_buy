import { PrismaClient } from "@prisma/client";

// Explicitly export PrismaClient
export { PrismaClient };

// Keep this to export other prisma types
export * from "@prisma/client";

// Optionally, export a singleton instance as discussed before
export const prisma = new PrismaClient();
