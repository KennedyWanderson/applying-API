

class Marca {
    [
        {
            "Marca": "Audi",
            "Modelo": "A30",
            "Categoria": "Esportivo",
            "Ano": 2014,
            "Quilometragem": 2000,
            "Valor": 275000,
            "id": 1
          }
    ]

    constructor(Marca, Modelo, Categoria, Ano, Quilometragem, Valor){
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Categoria = Categoria;
        this.Ano = Ano;
        this.Quilometragem = Quilometragem;
        this.Valor = Valor;
    }
}

const test = new    ('AUDI', 'A30', 'Esportivo')

console.log(test.Marca)
console.log(test.Modelo)
console.log(test.Categoria)