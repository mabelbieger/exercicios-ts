"use strict";
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    obterDetalhes() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2020);
console.log("Carro:", carro1.obterDetalhes());
class CarroEletrico extends Carro {
    constructor(marca, modelo, ano, autonomiaBateria) {
        super(marca, modelo, ano);
        this.autonomiaBateria = autonomiaBateria;
    }
    obterDetalhes() {
        return `${super.obterDetalhes()}, Autonomia da bateria: ${this.autonomiaBateria} km`;
    }
}
const carroEletrico1 = new CarroEletrico("Tesla", "Model 3", 2022, 500);
console.log("Carro Elétrico:", carroEletrico1.obterDetalhes());
