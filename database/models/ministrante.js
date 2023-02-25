"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ministrante extends Model {
    static associate(models) {
      this.belongsToMany(models.Palestra, {
        through: "palestraministrante",
        as: "palestras",
        foreignKey: "ministranteId",
      });
    }
  }
  Ministrante.init(
    {
      nome: DataTypes.STRING,
      foto: DataTypes.STRING,
      sobre: DataTypes.STRING,
      email: DataTypes.STRING,
      facebook: DataTypes.STRING,
      instagram: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      twitter: DataTypes.STRING,
      lattes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ministrante",
    }
  );
  return Ministrante;
};
