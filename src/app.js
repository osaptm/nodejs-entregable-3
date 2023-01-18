const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const usersRoutes = require('./routes/users.routes');
const PORT = 8000;

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ alter: true }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

  initModels();

const app = express();
app.use(express.json()); 

// RUTAS ENDPOINT USERES
app.use('/users',usersRoutes);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});