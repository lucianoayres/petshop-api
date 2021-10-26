import ServicoRepository from "./servico.repository.js";
import AnimalRepository from "../animal/animal.repository.js";

async function createServico(servico) {
  if (await AnimalRepository.getAnimal(servico.animalId)) {
    return await ServicoRepository.createServico(servico);
  }
  throw new Error("O ID do animal informado não existe.");
}

async function updateServico(servico) {
  if (await AnimalRepository.getAnimal(servico.animalId)) {
    return await ServicoRepository.updateServico(servico);
  }
  throw new Error("O ID do animal informado não existe.");
}

async function deleteServico(id) {
  await ServicoRepository.deleteServico(id);
}

async function getServicos(proprietarioId) {
  if (proprietarioId) {
    return await getServicoByProprietarioId(proprietarioId);
  } else {
    return await ServicoRepository.getServicos();
  }
}

async function getServico(id) {
  return await ServicoRepository.getServico(id);
}

async function getServicoByProprietarioId(proprietarioId) {
  return await ServicoRepository.getServicoByProprietarioId(proprietarioId);
}

export default {
  createServico,
  updateServico,
  deleteServico,
  getServicos,
  getServico,
  getServicoByProprietarioId,
};
