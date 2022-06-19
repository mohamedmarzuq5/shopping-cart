var db = require("../config/connection");
module.exports = {
  addProduct: (product, callback) => {
    // console.log(product, callback);
    db.get()
      .collection("product")
      .insertOne(product)
      .then((data) => {
        // console.log(data.insertedId);
        callback(data);
      })
  },
};
