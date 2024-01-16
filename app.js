const PORT = 8000;
const express = require("express"); //export express

const app = express(); // my backend
app.use(express.json());

let accounts = require("./accounts");
// app.get("/api/products", (req, res) => {
//   //this is my route
//   return res.json(data);
// });

app.get("/api/accounts", (req, res) => {
  //this is my route
  return res.status(200).json(accounts);
});

app.post("/api/accounts", (req, res) => {
  //this is my route
  //   console.log(req.body);
  const newAccount = {
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: req.body.funds,
  };

  accounts.push(newAccount);
  return res.json(accounts);
});

app.delete("/api/accounts/:id", (req, res) => {
  const { id } = req.params;
  const account = accounts.find((account) => {
    return account.id != id;
  });
  if (!account)
    return res.status(404).json({ msg: `account with ${id} id not found` });
  accounts = accounts.filter((acc) => acc.id !== account.id);
  return res.status(200).json(accounts);
});
app.put("/api/accounts", (req, res) => {
  const { id } = req.params;
  const account = accounts.find((account) => {
    return account.id == id;
  });
  if (!account)
    return res.status(404).json({ msg: `account with ${id} id not found` });
  return res.status(200).json(accounts);
});
app.listen(PORT, () => {
  console.log(`I'm running on port ${PORT}`);
});
