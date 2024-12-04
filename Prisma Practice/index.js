import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
      const post = await prisma.post.update({
        where: { id: 1 },
        data: { published: true },
      });
      console.log(post);
  
      const createUser = await prisma.user.create({
        data: {
          email: "testname@testname3.com",
          name: "testnameman3",
        },
      });
      console.log(createUser);
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });