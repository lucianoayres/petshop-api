import PostRepository from "./post.repository.js";

async function createPost(post) {
  return await PostRepository.createPost(post);
}

async function getPosts() {
  let posts = await PostRepository.getPosts();
  return posts;
}

export default {
  createPost,
  getPosts,
};
