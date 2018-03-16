"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        Username: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Username cannot be empty"
                }
            }
        }
    });
    return model;
}
exports.default = default_1;
