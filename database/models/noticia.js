"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Noticia extends Model {
    static associate(models) {
      this.belongsTo(models.Evento, {
        foreignKey: "eventoId",
        as: "evento",
      });
    }
  }
  Noticia.init(
    {
      titulo: DataTypes.STRING,
      noticia: DataTypes.TEXT,
      foto: DataTypes.STRING,
      data: DataTypes.DATE,
      eventoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Noticia",
    }
  );
  return Noticia;
};
