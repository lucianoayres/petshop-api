import Animal from "./animal.model.js";

async function createAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (err) {
    throw err;
  }
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: {
        animalId: animal.animalId,
      },
    });
    return await getAnimal(animal.animalId);
  } catch (err) {
    throw err;
  }
}

async function deleteAnimal(id) {
  try {
    // sequelize 'destroy' method
    await Animal.destroy({
      where: {
        animalId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getAnimais() {
  try {
    return await Animal.findAll();
  } catch (err) {
    throw err;
  }
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getAnimalByProprietarioId(proprietarioId) {
  try {
    return await Animal.findAll({
      where: {
        proprietarioId,
      },
      raw: true,
    });
  } catch (err) {
    throw err;
  }
}

async function getAnimalIdByProprietarioId(proprietarioId) {
  try {
    return await Animal.findAll({
      attributes: ["animalId"],
      where: {
        proprietarioId,
      },
      raw: true,
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal,
  getAnimalByProprietarioId,
  getAnimalIdByProprietarioId,
};
