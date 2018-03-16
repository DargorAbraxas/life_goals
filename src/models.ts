"use strict";

import * as Promise from "bluebird";
import * as Sequelize from "sequelize";

import { UserModel } from "../src/users/model";

const walkSync = require("walk-sync");

export interface Models {
  User: UserModel;
}

const fs        = require("fs");
const path      = require("path");
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || "development";
const config    = require(__dirname + "/../config/database.json")[env];
const db: Models = {} as Models;

function createSequelize(): Sequelize.Sequelize {
  if (config.use_env_variable) {
    return new Sequelize(process.env[config.use_env_letiable], config);
  }

  return new Sequelize(config.database, config.username, config.password, config);
}

function readModels(
  sequelizeInstance: Sequelize.Sequelize
): Models {
  walkSync(__dirname, { globs: ["**/*/model.js"] })
  .filter(file => {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(file => {
    const model: any = sequelizeInstance.import(path.join(__dirname, file));
    db[model.name] = model;
  });

  return db;
}

function associateModels(db: Models): Models {
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
}

function getModels() {
  const sequelizeInstance = createSequelize();
  const models = readModels(sequelizeInstance);
  associateModels(models);
  return models;
}

export const models = getModels();
