const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());

// Conexion establecida a servicio mondoDb en railwary
mongoose
  .connect('mongodb://mongo:bAEGaa2FGFeFegHc6BaHdED13E-435Ge@viaduct.proxy.rlwy.net:37160',  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(3001, () => {
  console.log("server started on port 3001");
});
