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

async function createFileQuery(filename, filepath, mimetype, size, folderId) {
  try {
    const fileRecord = await prisma.file.create({
      data: {
        filename: filename,
        filepath: filepath,
        mimetype: mimetype,
        size: size,
        folderId: folderId,
      },
    });
  } catch {
    console.log(`error at createFileQuery(), ${error}`);
  }
}

async function readFolderQuery(user) {
  try {
    const userId = user.id;

    const newFolder = await prisma.folders.findMany({
      where: {
        userId: userId,
      },
    });

    return newFolder;
  } catch (error) {
    console.log(`error at readFolderQuery(), ${error}`);
  }
}

async function readFolderFromNameQuery(folderName) {
  try {
    const folder = await prisma.folders.findUnique({
      where: {
        name: folderName,
      },
    });

    return folder;
  } catch (error) {
    console.log(`error at readFolderFromNameQuery(), ${error}`);
  }
}

async function readFilesQuery(folderId) {
  try {
    const files = await prisma.file.findMany({
      where: {
        folderId: folderId,
      },
    });

    return files;
  } catch (error) {
    console.log(`error at readFilesQuery(), ${error}`);
  }
}

export default {
  createUserQuery,
  createFileQuery,
  createFolderQuery,
  readFolderQuery,
  readFolderFromNameQuery,
  readFilesQuery,
};
