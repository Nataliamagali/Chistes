const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./configuracion/mongoose.config');
const jokesRoutes = require('./rutas/jokes.routes');

const app = express();
const port = process.env.PORT || 3000;

// se conecta  a la base de datos
connectDB();


app.use(bodyParser.json());

//  aqui rutas
app.use('/api/jokes', jokesRoutes);

// se inicia el servidor
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});
