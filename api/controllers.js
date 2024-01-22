const accounts = require("../accounts");
const Account = require("../models/Account");

const getAccounts = async (req, res, next) => {
  try {
    const accounts = await Account.find();
    // const account = await Account.findById(_id);
    return res.status(200).json(accounts);
  } catch (error) {
    next(error);
  }
};

const getAccountbyID = async (req, res, next) => {
  try {
    const account = await req.account;
    // const account = await Account.findById(_id);
    return res.status(201).json(account);
  } catch (error) {
    // return res.status(500).json("server error");
    next(error);
  }
};

const deleteAccounts = async (req, res, next) => {
  try {
    // await Account.findById(_id);
    await req.account.deleteOne(req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const createAccount = async (req, res, next) => {
  try {
    console.log(req.body); //data is inside req body
    const account = await Account.create(req.body);
    return res.status(201).json(account);
  } catch (error) {
    next(error);
  }
};

const updateAccounts = async (req, res, next) => {
  try {
    await req.account.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAccountbyID,
  getAccounts,
  createAccount,
  deleteAccounts,
  updateAccounts,
};
