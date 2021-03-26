"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("TiketHasCustomers", "TicketId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Tickets",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("TiketHasCustomers", "TicketId");
  },
};
