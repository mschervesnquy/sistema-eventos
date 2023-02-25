"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    static associate(models) {
      this.hasMany(models.Noticia, {
        foreignKey: "eventoId",
        as: "noticias",
      });
      this.hasMany(models.Palestra, {
        foreignKey: "eventoId",
        as: "palestras",
      });
    }
  }
  Evento.init(
    {
      nome: DataTypes.STRING,
      frase: DataTypes.STRING,
      sobre: DataTypes.STRING,
      local: DataTypes.STRING,
      datainicio: DataTypes.DATE,
      datafim: DataTypes.DATE,
      logo: DataTypes.STRING,
      banner: DataTypes.STRING,
      fotosobre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Evento",
    }
  );
  return Evento;
};
