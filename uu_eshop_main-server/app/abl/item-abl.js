"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { SysProfileModel } = require("uu_appg01_server").Workspace;
const Errors = require("../api/errors/eshop-main-error.js");
const path = require("path");

const WARNINGS = {
  createItemUnsupportedKeys: {
    code: "unsupportedKeys"
  }
};

class ItemAbl {
  constructor() {
    this.validator = new Validator(path.join(__dirname, "../api", "validation_types", "item-types.js"));
    this.itemDao = DaoFactory.getDao("item");
  }

  async createItem(awid, dtoIn) {
    // let validationResult = this.validator.validate("createItemDtoInType", dtoIn);
    // // A1, A2
    // let uuAppErrorMap = ValidationHelper.processValidationResult(
    //   dtoIn,
    //   validationResult,
    //   WARNINGS.createItemUnsupportedKeys.code
    //   // Errors.CreateProfessional.InvalidDtoIn
    // );

    await this.itemDao.create(dtoIn);

    return {
      ...dtoIn,
      // uuAppErrorMap
    };
  }

  async findItem(awid, dtoIn) {
    return await this.itemDao.get(awid, dtoIn.id);
  }

  async updateItem(awid, dtoIn) {
    return await this.itemDao.update(awid, dtoIn);
  }
}

module.exports = new ItemAbl();
