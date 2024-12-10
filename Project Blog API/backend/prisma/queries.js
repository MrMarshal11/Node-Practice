import prisma from "./prisma.js";

async function createUserQuery(fullname, username, hashedPassword) {
  try {
    const newUser = await prisma.users.create({
      data: {
        fullname: fullname,
        username: username,
        password: hashedPassword,
      },
    });
    console.log(`successfully created user: ${username}`);
  } catch (error) {
    console.log(`error at createUserQuery(), ${error}`);
  }
}

export default { createUserQuery };
