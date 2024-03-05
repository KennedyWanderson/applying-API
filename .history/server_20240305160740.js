const express = require('express');
const cors = require('cors'); // Importe o pacote cors
const app = express();
const PORT = 3000;

// Middleware para permitir o uso de JSON no corpo das solicitações
app.use(express.json());

// Rota para receber dados via POST
app.post('/api/data', (req, res) => {
  const { marca, modelo, categoria } = req.body;

  // Aqui você pode fazer o que quiser com os dados recebidos, por exemplo, apenas enviar de volta
  res.json({ marca, modelo, categoria });
});

// Rota para enviar dados via GET
app.get('/api/data', (req, res) => {
  // Aqui você pode retornar dados simulados ou dados do banco de dados, por exemplo
  const data = [
    { marca: 'Marca1', modelo: 'Modelo1', categoria: 'Categoria1' },
    { marca: 'Marca2', modelo: 'Modelo2', categoria: 'Categoria2' },
    // Adicione mais dados se desejar
  ];

  res.json(data);
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
