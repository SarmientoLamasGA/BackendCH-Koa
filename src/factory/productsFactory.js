const ProductsDaosMongo = require("../daos/products/productsDaosMongo");

class productsFactory {
  create() {
    const db = ProductsDaosMongo.getInstance();
    return db;
  }
}

module.exports = productsFactory;
