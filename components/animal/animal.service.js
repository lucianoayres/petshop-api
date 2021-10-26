import AnimalRepository from "../animal/animal.repository.js";
import ProprietarioRepository from "../proprietario/proprietario.repository.js";

async function createAnimal(animal) {
  if (await ProprietarioRepository.getProprietario(animal.proprietarioId)) {
    return await AnimalRepository.createAnimal(animal);
  }
  throw new Error("O ID do proprietário informado não existe.");
}

async function updateAnimal(animal) {
  if (await ProprietarioRepository.getProprietario(animal.proprietarioId)) {
    return await AnimalRepository.updateAnimal(animal);
  }
  throw new Error("O ID do proprietário informado não existe.");
}

async function deleteAnimal(id) {
  await AnimalRepository.deleteAnimal(id);
}

async function getAnimais(proprietarioId) {
  if (proprietarioId) {
    return await getAnimalByProprietarioId(proprietarioId);
  } else {
    return await AnimalRepository.getAnimais();
  }
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function getAnimalByProprietarioId(proprietarioId) {
  return await AnimalRepository.getAnimalByProprietarioId(proprietarioId);
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal,
  getAnimalByProprietarioId,
};
