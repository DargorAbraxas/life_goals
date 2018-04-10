"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
function default_1(sequelize, dataTypes) {
    const model = sequelize.define("User", {
        firstName: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "First name cannot be empty"
                }
            }
        },
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        lastName: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Last name cannot be empty"
                }
            }
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Password cannot be empty"
                }
            }
        },
        username: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Username cannot be empty"
                },
                isUnique: function (value) {
                    return model.findOne({
                        where: {
                            username: value
                        }
                    }).then(user => {
                        if (user) {
                            return Promise.reject("Username already in use");
                        }
                        return Promise.resolve(value);
                    });
                }
            }
        }
    });
    return model;
}
exports.default = default_1;
