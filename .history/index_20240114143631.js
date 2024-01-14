

function Teste(){
    console.log("Hello World!!!!")
}

function Get() {
    
    
    return fetch('https://apigenerator.dronahq.com/api/J4WXW45N/data')
    
    .then((response) => response.json())
    
    .then((data) => console.log(data));
    
    const input = document.getElementById('link').value;
      
  }