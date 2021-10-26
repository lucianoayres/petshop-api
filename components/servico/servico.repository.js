import Servico from "./servico.model.js";
import Animal from "../animal/animal.model.js";

async function createServico(servico) {
  try {
    return await Servico.create(servico);
  } catch (err) {
    throw err;
  }
}

async function updateServico(servico) {
  try {
    await Servico.update(servico, {
      where: {
        servicoId: servico.servicoId,
      },
    });
    return await getServico(servico.servicoId);
  } catch (err) {
    throw err;
  }
}

async function deleteServico(id) {
  try {
    // sequelize 'destroy' method
    await Servico.destroy({
      where: {
        servicoId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getServicos() {
  try {
    return await Servico.findAll();
  } catch (err) {
    throw err;
  }
}

async function getServico(id) {
  try {
    return await Servico.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getServicoByProprietarioId(proprietarioId) {
  try {
    return await Servico.findAll({
      include: {
        model: Animal,
        attributes: [],
        where: {
          proprietarioId,
        },
      },
      raw: true,
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createServico,
  updateServico,
  deleteServico,
  getServicos,
  getServico,
  getServicoByProprietarioId,
};
