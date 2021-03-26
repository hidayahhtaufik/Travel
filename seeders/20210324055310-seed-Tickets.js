"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tickets",
      [
        {
          nama_pesawat: "LionAir",
          seats: 30,
          price: 250000,
          flight_schedule: "2021-12-01",
          destination: "Lampung",
          class: "Ekonomi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_pesawat: "LionAir",
          seats: 17,
          price: 300000,
          flight_schedule: "2021-06-02",
          destination: "Bandung",
          class: "Bisnis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_pesawat: "Garuda",
          seats: 10,
          price: 1000000,
          flight_schedule: "2021-06-02",
          destination: "Bandung",
          class: "Eksekutif",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_pesawat: "Garuda",
          seats: 15,
          price: 700000,
          flight_schedule: "2021-05-02",
          destination: "Jakarta",
          class: "Bisnis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_pesawat: "Garuda",
          seats: 25,
          price: 500000,
          flight_schedule: "2021-05-02",
          destination: "Maluku",
          class: "Ekonomi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_pesawat: "SriwijayaAir",
          seats: 20,
          price: 750000,
          flight_schedule: "2021-05-02",
          destination: "Maluku",
          class: "Bisnis",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Tickets", null, {});
  },
};
