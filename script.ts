import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const log = (obj: any) => console.dir(obj, { depth: null });

// A `main` function so that you can use async/await
async function main() {
  // const post = await prisma.post.create({
  //   data: {
  //     title: "Prisma males databases easy",
  //     author: {
  //       connect: { email: "sarah@prisma.io" },
  //     },
  //   },
  // });
  // log(post);

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  log(allUsers);

  // const updatedPost = await prisma.post.update({
  //   where: { id: 2 },
  //   data: {
  //     published: true,
  //   },
  // });
  // log(updatedPost);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
