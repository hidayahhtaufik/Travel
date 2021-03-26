"use strict";
const { Model } = require("sequelize");
let bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Ticket, {
        through: models.TiketHasCustomer,
      });
    }
  }
  Customer.init(
    {
      name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      gender: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );

  Customer.beforeSave((user, options) => {
    const saltRounds = 10;
    const myPlaintextPassword = user.password;
    console.log(myPlaintextPassword);
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(myPlaintextPassword, salt);
    console.log(hash);

    user.password = hash;
  });
  return Customer;
};
