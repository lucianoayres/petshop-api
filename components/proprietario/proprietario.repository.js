import Proprietario from "./proprietario.model.js";

async function createProprietario(proprietario) {
  try {
    // sequelize 'create' method
    return await Proprietario.create(proprietario);
  } catch (err) {
    throw err;
  }
}

async function updateProprietario(proprietario) {
  try {
    // sequelize 'update' method
    await Proprietario.update(proprietario, {
      where: {
        proprietarioId: proprietario.proprietarioId,
      },
    });
    return await getProprietario(proprietario.proprietarioId);
  } catch (err) {
    throw err;
  }
}

async function deleteProprietario(id) {
  try {
    // sequelize 'destroy' method
    await Proprietario.destroy({
      where: {
        proprietarioId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getProprietarios() {
  try {
    // sequelize 'create' method
    return await Proprietario.findAll();
  } catch (err) {
    throw err;
  }
}

async function getProprietario(id) {
  try {
    // sequelize 'findByPk' method
    return await Proprietario.findByPk(id);
  } catch (err) {
    throw err;
  }
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};
