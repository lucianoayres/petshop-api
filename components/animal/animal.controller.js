import AnimalService from "../animal/animal.service.js";

async function createAnimal(req, res, next) {
  try {
    let animal = req.body;

    if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
      throw new Error("Nome, Tipo e ID do Proprietário são obrigatórios");
    }
    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(req, res, next) {
  try {
    let animal = req.body;

    if (!animal.nome || !animal.tipo || !animal.proprietarioId) {
      throw new Error("Nome, Tipo e ID do Proprietário são obrigatórios");
    }
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(req, res, next) {
  try {
    let animalId = req.params.id;
    if (!animalId) {
      throw new Error("ID do animal é obrigatório.");
    }
    await AnimalService.deleteAnimal(animalId);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function getAnimais(req, res, next) {
  try {
    res.send(await AnimalService.getAnimais(req.query.proprietarioId));
  } catch (err) {
    next(err);
  }
}

async function getAnimal(req, res, next) {
  try {
    let animalId = req.params.id;

    if (!animalId) {
      throw new Error("ID do animal é obrigatório.");
    }
    res.send(await AnimalService.getAnimal(animalId));
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal,
};
