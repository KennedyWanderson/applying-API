

function Teste(){
    console.log("Hello World!!!!")
}

function Get() {
    
    
    const url = 'https://apigenerator.dronahq.com/api/J4WXW45N/data'

    fetch(url)
    .then((resp))
    
    .then((response) => response.json())
    
    .then((data) => console.log(data));
          
  }