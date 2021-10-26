import PostService from "./post.service.js";

async function createPost(req, res, next) {
  try {
    let post = req.body;

    if (!post.titulo || !post.conteudo) {
      throw new Error("Título, conteúdo e comentários são obrigatórios");
    }

    post = await PostService.createPost(post);
    res.send(post);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPosts,
};
