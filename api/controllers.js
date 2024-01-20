const accounts = require("../accounts");
const Account = require("../models/Account");

const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    return res.status(200).json(accounts);
  } catch (error) {
    return res.status(500).json("server error");
  }
};

const deleteAccounts = async (req, res) => {
  try {
    const _id = req.params._id;
    // await Account.findById(_id);
    await Account.findByIdAndDelete(_id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json("server error");
  }

  //   const { id } = req.params;
  //   const account = accounts.find((account) => {
  //     return account.id != id;
  //   });
  //   if (!account)
  //     return res.status(404).json({ msg: `account with ${id} id not found` });
  //   accounts = accounts.filter((acc) => acc.id !== account.id);
  //   return res.status(200).json(accounts);
};

const createAccount = async (req, res) => {
  try {
    console.log(req.body); //data is inside req body
    const account = await Account.create(req.body);
    return res.status(201).json(account);
  } catch (error) {
    return res.status(500).json("server error");
  }
};

const updateAccounts = async (req, res) => {
  try {
    const _id = req.params._id;

    await Account.findByIdAndUpdate(_id, req.body);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server error");
  }
};

module.exports = {
  getAccounts,
  createAccount,
  deleteAccounts,
  updateAccounts,
};
