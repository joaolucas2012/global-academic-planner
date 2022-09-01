// import express
const express = require("express");
// import mongoose
const mongoose = require("mongoose");
require("dotenv").config();
// import routes
const useRoutes = require("./routes/user");

// app
const app = express();

// load env variables
const dotenv = require("dotenv");
dotenv.config();

// db connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log(`DB Connected`));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

// routes middleware
app.use("/api", useRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
