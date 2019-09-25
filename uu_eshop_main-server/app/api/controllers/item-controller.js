"use strict";
const ItemAbl = require("../../abl/item-abl.js");

class ItemController {
  createItem(ucEnv) {
    return ItemAbl.createItem(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  findItem(ucEnv) {
    return ItemAbl.findItem(ucEnv.getUri().getAwid, ucEnv.getDtoIn());
  }
  updateItem(ucEnv) {
    return ItemAbl.updateItem(ucEnv.getUri().getAwid, ucEnv.getDtoIn(), ucEnv);
  }
}

module.exports = new ItemController();
