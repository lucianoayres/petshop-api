import ProprietarioService from "../proprietario/proprietario.service.js";

async function createProprietario(req, res, next) {
  try {
    let proprietario = req.body;

    if (!proprietario.nome || !proprietario.telefone) {
      throw new Error("Nome e Telefone são obrigatórios");
    }
    proprietario = await ProprietarioService.createProprietario(proprietario);
    res.send(proprietario);
  } catch (err) {
    next(err);
  }
}

async function updateProprietario(req, res, next) {
  try {
    let proprietario = req.body;

    if (!proprietario.nome || !proprietario.telefone) {
      throw new Error("Nome e Telefone são obrigatórios");
    }
    proprietario = await ProprietarioService.updateProprietario(proprietario);
    res.send(proprietario);
  } catch (err) {
    next(err);
  }
}

async function deleteProprietario(req, res, next) {
  try {
    let proprietarioId = req.params.id;
    if (!proprietarioId) {
      throw new Error("ID do proprietário é obrigatório.");
    }
    await ProprietarioService.deleteProprietario(proprietarioId);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function getProprietarios(req, res, next) {
  try {
    res.send(await ProprietarioService.getProprietarios());
  } catch (err) {
    next(err);
  }
}

async function getProprietario(req, res, next) {
  try {
    let proprietarioId = req.params.id;

    if (!proprietarioId) {
      throw new Error("ID do proprietário é obrigatório.");
    }
    res.send(await ProprietarioService.getProprietario(proprietarioId));
  } catch (err) {
    next(err);
  }
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietario,
  getProprietarios,
};
