import PostRepository from "../post/post.repository.js";

async function createComentario(nome, conteudo, postId) {
  try {
    const post = await PostRepository.getPost(postId);
    let comentario = { nome, conteudo };

    if (!post.comentarios) {
      post.comentarios = [];
    }

    post.comentarios.push(comentario);
    await PostRepository.updatePost(post);

    return comentario;
  } catch (err) {
    throw err;
  }
}

export default {
  createComentario,
};
