"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Palestra extends Model {
    static associate(models) {
      this.belongsTo(models.Evento, {
        foreignKey: "eventoId",
        as: "evento",
      });
      this.belongsToMany(models.Ministrante, {
        through: "palestraministrante",
        as: "ministrantes",
        foreignKey: "palestraId",
      });
    }
  }
  Palestra.init(
    {
      titulo: DataTypes.STRING,
      resumo: DataTypes.STRING,
      dataehora: DataTypes.DATE,
      eventoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Palestra",
    }
  );
  return Palestra;
};
