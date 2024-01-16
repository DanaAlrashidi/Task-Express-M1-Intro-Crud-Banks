const express = require("express");
const {
  getAccounts,
  addAccounts,
  deleteAccounts,
  updateAccounts,
} = require("./controllers");

const router = express.Router();

router.get("/", getAccounts);

router.post("/", addAccounts);

router.delete("/:id", deleteAccounts);

router.put("/:id", updateAccounts);

module.exports = router;
