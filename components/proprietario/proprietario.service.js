import ProprietarioRepository from "../proprietario/proprietario.repository.js";
import AnimalRepository from "../animal/animal.repository.js";

async function createProprietario(proprietario) {
  return await ProprietarioRepository.createProprietario(proprietario);
}

async function updateProprietario(proprietario) {
  return await ProprietarioRepository.updateProprietario(proprietario);
}

async function deleteProprietario(id) {
  const hasAnimal = await AnimalRepository.getAnimalByProprietarioId(id);
  if (hasAnimal.length > 0) {
    throw new Error(
      "Não é possível excluir proprietário que possua um ou mais animais."
    );
  } else {
    await ProprietarioRepository.deleteProprietario(id);
  }
}

async function getProprietarios() {
  return await ProprietarioRepository.getProprietarios();
}

async function getProprietario(id) {
  return await ProprietarioRepository.getProprietario(id);
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};
