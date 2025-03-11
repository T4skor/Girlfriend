const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  

const app = express();
const port = 80;

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  
  res.send('Bienvenido a la página de la propuesta especial.');
});

app.post('/recordChoice', (req, res) => {
  const choice = req.body.choice;
  console.log(`La persona eligió: ${choice}`);
  
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
