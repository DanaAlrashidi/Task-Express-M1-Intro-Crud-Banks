const { model, Schema } = require("mongoose");

const AccountSchema = new Schema(
  {
    username: { type: String, required: true },
    funds: { type: Number, default: 100 },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Account", AccountSchema);
