const express = require("express");
const cors = require('cors');
const db = require("./utils/database");
const initModels = require("./models/init.models");
const usersRoutes = require('./routes/users.routes');
const coursesRoutes = require('./routes/courses.routes');
const videosRoutes = require('./routes/videos.routes');
const categoriesRoutes = require('./routes/categories.routes');
const PORT = 8000;

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

  initModels();

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));


const app = express();
app.use(express.json()); 
app.use(cors()); 

// RUTAS ENDPOINT USERES
app.use('/users',usersRoutes);
app.use('/courses',coursesRoutes);
app.use('/videos',videosRoutes);
app.use('/categories',categoriesRoutes);

app.listen(PORT);
console.log(`Servidor corriendo en el puerto ${PORT}`);
