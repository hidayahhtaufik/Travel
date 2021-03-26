"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("TiketHasCustomers", "CustomerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Customers",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("TiketHasCustomers", "CustomerId");
  },
};
