"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "usertest1",
          email: "userteste1@test1.com",
          password_hash: await bcrypt.hash("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "usertest2",
          email: "userteste2@test2.com",
          password_hash: await bcrypt.hash("45667654", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "usertest3",
          email: "userteste3@test3.com",
          password_hash: await bcrypt.hash("36788905", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
