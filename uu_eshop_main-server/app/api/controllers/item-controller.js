"use strict";
const ItemAbl = require("../../abl/item-abl.js");

class ItemController {
  createItem(ucEnv) {
    return ItemAbl.createItem(ucEnv.getUri().getAwid, ucEnv.getDtoIn());
  }
  findItem(ucEnv) {
    return ItemAbl.findItem(ucEnv.getUri().getAwid, ucEnv.getDtoIn());
  }
  findItems(ecEnv) {
    return ItemAbl.findItems(ecEnv.getUri().getAwid, ecEnv.getDtoIn());
  }
  updateItem(ucEnv) {
    return ItemAbl.updateItem(ucEnv.getUri().getAwid, ucEnv.getDtoIn());
  }
  removeItem(ucEnv) {
    return ItemAbl.removeItem(ucEnv.getUri().getAwid, ucEnv.getDtoIn());
  }
}

module.exports = new ItemController();
