const express = require('express'); // Servidor local para testar as req http
const cors = require('cors'); // Importe o pacote cors
const app = express();
const PORT = 3000;

// Middleware para permitir o uso de JSON no corpo das solicitações
app.use(express.json());
app.use(cors()); // Utilize o middleware cors para permitir solicitações de origens diferentes

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
    { marca: 'BMW', modelo: '320i', categoria: 'Categoria1' },
    { marca: 'Marca2', modelo: 'Modelo2', categoria: 'Categoria2' },
    // Adicione mais dados se desejar
  ];

  res.json(data);
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
