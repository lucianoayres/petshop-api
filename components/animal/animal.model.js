import Sequelize from "sequelize";
import db from "../database/db.js";
import Proprietario from "../proprietario/proprietario.model.js";

const Animal = db.define(
  "animais",
  {
    animalId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

Animal.belongsTo(Proprietario, { foreignKey: "proprietarioId" });

export default Animal;
