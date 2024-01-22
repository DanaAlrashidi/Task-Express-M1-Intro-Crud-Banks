const express = require("express");
const {
  getAccountbyID,
  createAccount,
  deleteAccounts,
  updateAccounts,
  getAccounts,
} = require("./controllers");
const Account = require("../models/Account");
const router = express.Router();

router.param("_id", async (req, res, next, _id) => {
  const account = await Account.findById(_id);
  if (!account)
    return res.status(404).json({ message: "account with this id not found!" });

  req.account = account;
  next();
});

router.get("/:_id", getAccountbyID);
router.get("/", getAccounts);
router.post("/", createAccount);
router.delete("/:_id", deleteAccounts);
router.put("/:_id", updateAccounts);

module.exports = router;
