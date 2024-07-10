const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://mongo:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Rota principal
app.get('/', (req, res) => {
  res.send({Mensagem: "Olá, Este é o trabalho de Engenharia de Software II, onde foi nos solicitado o uso do Docker para a criação de Containers, No caso Foi Realizado o uso do banco de dados MongoDB",
    Integrantes: "Pedro Siqueira, Vitor Macedo",
    Ferramentas: "Arquivo Docker e Docker-Compose",
    Status_Mongo: "Conectado 🔓",
  }
  );
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
