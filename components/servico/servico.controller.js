import ServicoService from "../servico/servico.service.js";

async function createServico(req, res, next) {
  try {
    let servico = req.body;

    if (!servico.descricao || !servico.valor || !servico.animalId) {
      throw new Error("Descrição, Valor e ID do Animal são obrigatórios");
    }
    servico = await ServicoService.createServico(servico);
    res.send(servico);
  } catch (err) {
    next(err);
  }
}

async function updateServico(req, res, next) {
  try {
    let servico = req.body;

    if (!servico.descricao || !servico.valor || !servico.animalId) {
      throw new Error("Descrição, Valor e ID do Animal são obrigatórios");
    }
    servico = await ServicoService.updateServico(servico);
    res.send(servico);
  } catch (err) {
    next(err);
  }
}

async function deleteServico(req, res, next) {
  try {
    let servicoId = req.params.id;
    if (!servicoId) {
      throw new Error("ID do servico é obrigatório.");
    }
    await ServicoService.deleteServico(servicoId);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function getServicos(req, res, next) {
  try {
    res.send(await ServicoService.getServicos(req.query.proprietarioId));
  } catch (err) {
    next(err);
  }
}

async function getServico(req, res, next) {
  try {
    let servicoId = req.params.id;

    if (!servicoId) {
      throw new Error("ID do serviço é obrigatório.");
    }
    res.send(await ServicoService.getServico(servicoId));
  } catch (err) {
    next(err);
  }
}

export default {
  createServico,
  updateServico,
  deleteServico,
  getServicos,
  getServico,
};
