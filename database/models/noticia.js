"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Noticia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      eventoId: {
        type: DataTypes.INTEGER,
        reference: {
          model: "Eventos",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Noticia",
    }
  );
  return Noticia;
};
