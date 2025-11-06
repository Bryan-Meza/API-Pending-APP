const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('API de Pendientes - Página inicial');
});

// Rutas principales (incluye users y swagger)
app.use(require('./routes/routes.js'));

// Rutas de pendientes
app.use('/todos', require('./routes/todos.js'));

app.listen(port, () => {
  console.log(`API de Pendientes escuchando en el puerto ${port}`);
});
