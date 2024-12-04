import prisma from "./prisma.js";

async function createUserQuery(username, password) {
  try {
    const newUser = await prisma.users.create({
      data: {
        username: username,
        password: password,
      },
    });
  } catch (error) {
    console.log(`error at createUserQuery(), ${error}`);
  }
}

export default { createUserQuery };
