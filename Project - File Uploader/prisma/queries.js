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
  } catch (error) {
    console.log(`error at createUserQuery(), ${error}`);
  }
}

async function createFolderQuery(userId, name) {
  try {
    const newFolder = await prisma.folders.create({
      data: {
        userId: userId,
        name: name,
      },
    });
  } catch (error) {
    console.log(`error at createFolderQuery(), ${error}`);
  }
}

async function createFileQuery(filename, filepath, mimetype, size) {
  try {
    const fileRecord = await prisma.file.create({
      data: {
        filename: filename,
        filepath: filepath,
        mimetype: mimetype,
        size: size,
      },
    });
  } catch {
    console.log(`error at createFileQuery(), ${error}`);
  }
}

export default { createUserQuery, createFileQuery, createFolderQuery };
