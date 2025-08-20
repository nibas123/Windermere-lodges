import { PrismaClient, Prisma } from "../lib/generated/prisma";

const prisma = new PrismaClient();

const data: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    password: "Alan007erhaf",
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    password: "Alan00erhaf",
  },
  {
    name: "Neo",
    email: "neo@prisma.io",
    password: "neo007erhaf",
  },
  {
    name: "Boby",
    email: "boby@prisma.io",
    password: "boby00erhaf",
  },
  {
    name: "dairy",
    email: "dairy@prisma.io",
    password: "dairy007erhaf",
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    password: "Alan00erhaf",
  },
  {
    name: "Nancy",
    email: "nancy@prisma.io",
    password: "nancy007erhaf",
  },
  {
    name: "balu",
    email: "balu@prisma.io",
    password: "balu00erhaf",
  },
];

export async function main() {
  await prisma.user.createMany({ data: data, skipDuplicates: true });
}

main();
