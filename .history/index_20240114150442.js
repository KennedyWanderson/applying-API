

function Teste(){
    console.log("Hello World!!!!")
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
  }

// function Get() {
    
    
//     const url = 'https://apigenerator.dronahq.com/api/J4WXW45N/data'

//     fetch(url)
//     .then((resp) => resp.json())    
//     .then(function(data) {
//         let carro = data.results
//          carro.map(function(carros){
//             let div = createNode('div');
//             let span = createNode('span');
//             span.innerHTML = `${carros.marca}`;
//             append(div, span);
//             append(document.getElementById('carros'), div);            
//         })

//     })
//     .catch(function(error){
//         console.log(error)
//     })
//   }

function Get() {
    const url = 'https://apigenerator.dronahq.com/api/J4WXW45N/data';

    fetch(url)
    .then((resp) => resp.json())    
    .then(function(data) {
        console.log('Data from API:', data); // Adicione este log

        if (data && data.results && Array.isArray(data.results)) {
            let carro = data.results;
            carro.map(function(carros){
                let div = createNode('div');
                let span = createNode('span');
                span.innerHTML = `${carros.marca}`;
                append(div, span);
                append(document.getElementById('carros'), div);            
            });
        } else {
            console.log('Formato de dados inválido');
        }
    })
    .catch(function(error){
        console.log('Erro na requisição:', error);
    });
}
