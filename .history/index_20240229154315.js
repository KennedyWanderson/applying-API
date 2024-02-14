

function Teste(){
    console.log("Hello World!!!!")
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function Get() {
    const url = 'https://apigenerator.dronahq.com/api/J4WXW45N/data';

    fetch(url)
    .then((resp) => resp.json())    
    .then((data) =>  {

            data.map(function(carro){
                let div = createNode('div');
                let span = createNode('span');
                span.innerHTML = `${carro.Marca} ${carro.Modelo} ${carro.Categoria}`;
                append(div, span);
                append(document.getElementById('carros'), div);            
            });
    })
    .catch(function(error){
        console.log('Erro na requisição:', error);
    });
}

async function postData() {
  const marcaInput = document.getElementById('marca').value.trim();
  const modeloInput = document.getElementById('modelo').value.trim();
  const categoriaInput = document.getElementById('categoria').value.trim();

  const data = { Marca: marcaInput, Modelo: modeloInput, Categoria: categoriaInput };

  try {
      const response = await fetch('https://apigenerator.dronahq.com/api/J4WXW45N/data', {
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

async function Get() {
  const url = 'https://apigenerator.dronahq.com/api/J4WXW45N/data';

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

  
  
  postData('https://apigenerator.dronahq.com/api/J4WXW45N/data', Marca, Modelo, Categoria)
  
    .then((data) => {
  
      console.log(data);  
  
  });