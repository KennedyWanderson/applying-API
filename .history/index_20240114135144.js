

function Teste(){
    console.log("Hello World!!!!")
}

function Get() {

    return fetch('COLOQUE A URL AQUI!!')
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }