const accounts = require("../accounts");
const Account = require("../models/Account");

const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    return res.json(accounts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addAccounts = (req, res) => {
  //this is my route
  //   console.log(req.body);
  const newAccount = {
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: req.body.funds,
  };

  accounts.push(newAccount);
  return res.json(accounts);
};

const deleteAccounts = (req, res) => {
  const { id } = req.params;
  const account = accounts.find((account) => {
    return account.id != id;
  });
  if (!account)
    return res.status(404).json({ msg: `account with ${id} id not found` });
  accounts = accounts.filter((acc) => acc.id !== account.id);
  return res.status(200).json(accounts);
};

const updateAccounts = (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  const account = accounts.find((account) => {
    return account.id == id;
  });
  if (!account)
    return res.status(404).json({ msg: `account with ${id} id not found` });

  //   account.id = req.body.id ? req.body.id : account.id;
  account.username = username ? username : account.username;
  //   account.id = id ? id : account.id;

  return res.status(200).json(accounts);
};

module.exports = { getAccounts, addAccounts, deleteAccounts, updateAccounts };
