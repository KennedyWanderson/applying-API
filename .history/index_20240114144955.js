

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
    
    
    const url = 'https://apigenerator.dronahq.com/api/J4WXW45N/data'

    fetch(url)
    .then((resp) => resp.json())    
    .then(function(data) {
        let carro = data.results
        return carro.map(function(carros){
            let div = createNode('div')
            span.innerHTML = `${author.name.first} ${author.name.last}`;

            append(div);
        })

    })
    .catch(function(error){
        console.log(error)
    })
  }