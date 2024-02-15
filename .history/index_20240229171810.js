

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
function obterDados() {
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const categoria = document.getElementById('categoria').value;
  
  return { marca, modelo, categoria };
}

// Função para enviar os dados para a API
async function postData() {
  const url = 'https://apigenerator.dronahq.com/api/rxqFcQqA/data';
  const data = obterDados();

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

// Adiciona um evento de clique ao botão "Enviar" para chamar a função postData
document.getElementById('enviarBtn').addEventListener('click', postData);





async function Get() {
  const url = 'https://apigenerator.dronahq.com/api/rxqFcQqA/data';

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
            div.textContent = `${marca} ${modelo} ${categoria}`;
          carrosDiv.appendChild(div);
      });
  } catch (error) {
      console.error('Erro na requisição:', error);
  }
}
