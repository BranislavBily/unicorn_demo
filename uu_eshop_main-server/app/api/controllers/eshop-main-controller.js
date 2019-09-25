"use strict";
const EshopMainAbl = require("../../abl/eshop-main-abl.js");

class EshopMainController {
  init(ucEnv) {
    return EshopMainAbl.init(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new EshopMainController();
