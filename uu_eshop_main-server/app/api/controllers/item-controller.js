"use strict";
const ItemAbl = require("../../abl/item-abl.js");

class ItemController {
  createItem(ucEnv) {
    return ItemAbl.createItem(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new ItemController();
