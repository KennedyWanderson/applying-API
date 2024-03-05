

// async function postData(url='https://apigenerator.dronahq.com/api/rxqFcQqA/data', data) {
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });
    
//     if (!response.ok) {
//       throw new Error('Erro ao enviar os dados');
//     }

//     console.log('Dados enviados com sucesso!');
//   } catch (error) {
//     console.error('Erro ao enviar os dados:', error);
//   }
  
// }

// Função para obter os dados dos campos de entrada
async function postData() {
  const url = 'http://localhost:3000/api/data'; // altere para o endereço da sua API
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const categoria = document.getElementById('categoria').value;
  const data = { marca, modelo, categoria };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar os dados');
    }

    console.log('Dados enviados com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar os dados:', error);
  }
}

async function getData() {
  const url = 'http://localhost:3000/api/data'; // altere para o endereço da sua API

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Erro ao buscar os dados');
    }

    const data = await response.json();

    const carrosDiv = document.getElementById('carros');
    carrosDiv.innerHTML = ''; // Limpa o conteúdo atual

    data.forEach(carro => {
      const div = document.createElement('div');
      const marca = carro.marca !== undefined ? carro.marca : '';
      const modelo = carro.modelo !== undefined ? carro.modelo : '';
      const categoria = carro.categoria !== undefined ? carro.categoria : '';
      div.textContent = `${marca} ${modelo} ${categoria}`;
      carrosDiv.appendChild(div);
    });
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
}

document.getElementById('enviarBtn').addEventListener('click', postData);
document.getElementById('apiBtn').addEventListener('click', getData);
