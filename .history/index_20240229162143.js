

async function postData(url, data) {
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


postData('https://apigenerator.dronahq.com/api/J4WXW45N/data', data);


async function Get() {
  const url = 'https://apigenerator.dronahq.com/api/x7yhjTxW/data';

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
