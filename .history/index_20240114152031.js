

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
