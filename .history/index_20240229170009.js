

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

    method: 'POST', // *GET, POST, PUT, DELETE, etc.

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


postData('https://apigenerator.dronahq.com/api/rxqFcQqA/data', cep /* OBJETO A SER USADO */)

  .then((data) => {

    console.log(data);  

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
