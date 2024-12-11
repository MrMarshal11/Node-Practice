import { name } from "ejs";
import prisma from "./prisma.js";

async function createUserQuery(username, fullname, hashedPassword) {
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

async function getUserFromUsername(username) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        username: username,
      },
    });
    return user;
  } catch (error) {
    console.log(`error at getFromUsername(), ${error}`);
  }
}

async function createPostQuery(name, userId, title, description) {
  try {
    await prisma.posts.create({
      data: {
        name: name,
        userId: userId,
        title: title,
        description: description,
      },
    });

    console.log(`successfully created post: ${title}`);
  } catch (error) {
    console.log(`error at createPostQuery(), ${error}`);
  }
}

async function getPostsQuery() {
  try {
    const posts = await prisma.posts.findMany();
    console.log(`successfully founds posts`);
    return posts;
  } catch (error) {
    console.log(`error at getPostsQuery(), ${error}`);
  }
}

async function newCommentQuery(name, comment, postId) {
  try {
    await prisma.comments.create({
      data: {
        name: name,
        description: comment,
        postId: postId,
      },
    });

    console.log(`successfully created comment`);
  } catch (error) {
    console.log(`error at newCommentQuery(), ${error}`);
  }
}

export default {
  createUserQuery,
  getUserFromUsername,
  createPostQuery,
  getPostsQuery,
  newCommentQuery,
};
