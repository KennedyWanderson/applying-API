

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

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });

  return response.json();
}

let Marca = "";
let Modelo = "";
let Categoria = "";

// Aqui você pode preencher as variáveis Marca, Modelo e Categoria com os dados inseridos pelo usuário

const data = { Marca, Modelo, Categoria };

postData('https://apigenerator.dronahq.com/api/rxqFcQqA/data', data)
  .then((data) => {
    console.log(data);  
  })
  .catch((error) => {
    console.error('Erro ao enviar os dados:', error);
  });




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
          div.textContent = `${carro.Marca} ${carro.Modelo} ${carro.Categoria}`;
          carrosDiv.appendChild(div);
      });
  } catch (error) {
      console.error('Erro na requisição:', error);
  }
}
