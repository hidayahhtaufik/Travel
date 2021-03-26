"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsToMany(models.Customer, {
        through: models.TiketHasCustomer,
      });
    }
  }
  Ticket.init(
    {
      nama_pesawat: DataTypes.STRING,
      seats: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      flight_schedule: DataTypes.STRING,
      destination: DataTypes.STRING,
      class: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );

  Ticket.changePrice =  (price) =>{
    return "Rp. " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return Ticket;
};
