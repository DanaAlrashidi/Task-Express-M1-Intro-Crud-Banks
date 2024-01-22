const PORT = 8002;
const express = require("express"); //export express
const accountsRouter = require("./api/routes");
const connectDB = require("./database");
const app = express(); // my backend
const morgan = require("morgan");
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/accounts", accountsRouter);
//not found handler
app.use((req, res, next) => {
  return res.status(404).json({ message: "Path not found!" });
});

//not found handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Path not found!");
});

// app.get("/api/products", (req, res) => {
//   //this is my route
//   return res.json(data);
// });
connectDB();
app.listen(PORT, () => {
  console.log(`I'm running on port ${PORT}`);
});
