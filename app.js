const PORT = 8002;
const express = require("express"); //export express
const accountsRouter = require("./api/routes");
const connectDB = require("./database");
const app = express(); // my backend
app.use(express.json());

app.use("/api/accounts", accountsRouter);
// app.get("/api/products", (req, res) => {
//   //this is my route
//   return res.json(data);
// });
connectDB();
app.listen(PORT, () => {
  console.log(`I'm running on port ${PORT}`);
});
