import ComentarioService from "./comentario.service.js";

async function createComentario(req, res, next) {
  try {
    const comentario = req.body;
    if (!comentario.nome || !comentario.conteudo) {
      throw new Error("Nome e conteúdo são obrigatórios");
    }
    res.send(
      await ComentarioService.createComentario(
        comentario.nome,
        comentario.conteudo,
        comentario.postId
      )
    );
  } catch (err) {
    next(err);
  }
}

export default {
  createComentario,
};
