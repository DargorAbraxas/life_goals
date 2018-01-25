"use strict";

import { QueryInterface, SequelizeStatic } from "sequelize";

const tableName: string = "Users";
const id: string = "id";
const firstName: string = "firstName";
const lastName: string = "lastName";
const userName: string = "userName";
const password: string = "password";

export = {
  up: function (queryInterface: QueryInterface, sequelize: SequelizeStatic) {
    return queryInterface.sequelize.transaction(function(transaction) {
      return queryInterface.createTable(tableName, {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: sequelize.INTEGER
        },
        firstName: {
          allowNull: false,
          type: sequelize.STRING
        },
        lastName: {
          allowNull: false,
          type: sequelize.STRING
        },
        userName: {
          allowNull: false,
          type: sequelize.STRING
        },
        password: {
          allowNull: false,
          type: sequelize.STRING
        }
      });
    });
  },

  down: function (queryInterface: QueryInterface, _sequelize: SequelizeStatic) {
    return queryInterface.dropTable(tableName);
  }
};
