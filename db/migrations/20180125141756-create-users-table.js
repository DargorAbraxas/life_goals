"use strict";
const tableName = "Users";
const id = "id";
const firstName = "firstName";
const lastName = "lastName";
const userName = "userName";
const password = "password";
module.exports = {
    up: function (queryInterface, sequelize) {
        return queryInterface.sequelize.transaction(function (transaction) {
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
    down: function (queryInterface, _sequelize) {
        return queryInterface.dropTable(tableName);
    }
};
