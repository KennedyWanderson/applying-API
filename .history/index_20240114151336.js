

function Teste(){
    console.log("Hello World!!!!")
}

function Get() {
    
    
    const url = 'https://apigenerator.dronahq.com/api/J4WXW45N/data'

    fetch(url)
    .then((resp) => resp.json())    
    .then((data) => console.log(data));

    let data
          
  }