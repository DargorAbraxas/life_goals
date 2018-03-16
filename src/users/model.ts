"use strict";

import * as Promise from "bluebird";
import * as Sequelize from "sequelize";

export interface UserModel extends Sequelize.Model<User, UserAttrs> {}

export interface User extends Sequelize.Instance<UserAttrs> {}

export interface UserAttrs {
  firstName?: string;
  id?: number;
  lastName?: string;
  password?: string;
  userName?: string;
}

export default function(
  sequelize: Sequelize.Sequelize,
  dataTypes: Sequelize.DataTypes
): UserModel {
  const model: UserModel = sequelize.define<User, UserAttrs>("User", {
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
