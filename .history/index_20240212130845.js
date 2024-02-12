

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
  
  
  postData('COLOQUE URL AQUI', cep /* OBJETO A SER USADO */)
  
    .then((data) => {
  
      console.log(data);  
  
  });