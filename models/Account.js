const { model, schema, Schema } = require("mongoose");

const AccountSchema = new Schema({
  name: String,
  funds: Number,
});

module.exports = model("Account", AccountSchema);
