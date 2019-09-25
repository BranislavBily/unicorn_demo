"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ItemMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(awid, id) {
    let filter = {
      awid: awid,
      id: id
    };
    return await super.findOne(filter)
  }

  async getItems(awid) {
    let filter = {
      awid: awid
    };
    return super.find(filter);
  }

  async update(awid, dtoIn) {
    let filter = {
      awid: awid,
      id: dtoIn.id
    };
    let uuObject = {
      name: dtoIn.updatedItem.name,
      price: dtoIn.updatedItem.price,
      description: dtoIn.updatedItem.description
    };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }

  async remove(awid, uuObject) {
    let filter = {
      awid: awid,
      id: uuObject.id
    };
    return await super.deleteOne(filter);
  }
}

module.exports = ItemMongo;
