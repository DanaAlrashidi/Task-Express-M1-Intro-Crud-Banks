const express = require("express");
const {
  getAccounts,
  createAccount,
  deleteAccounts,
  updateAccounts,
} = require("./controllers");

const router = express.Router();

router.get("/", getAccounts);

router.post("/", createAccount);

router.delete("/:_id", deleteAccounts);

router.put("/:_id", updateAccounts);

module.exports = router;
