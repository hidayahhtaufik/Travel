'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TiketHasCustomer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TiketHasCustomer.init({
    TicketId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    QtyPembelian: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TiketHasCustomer',
  });
  return TiketHasCustomer;
};