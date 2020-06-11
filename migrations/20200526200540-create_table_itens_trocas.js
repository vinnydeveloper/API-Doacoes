"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("itens_doacoes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idDoacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "doacoes",
          },
          key: "id",
        },
      },
      idItem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "itens",
          },
          key: "id",
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("itens_doacoes");
  },
};
