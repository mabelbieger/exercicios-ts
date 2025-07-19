"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retornarPrimeiro = retornarPrimeiro;
function retornarPrimeiro(arr) {
    return arr[0];
}
const numeros = [10, 20, 30];
console.log('Primeiro número:', retornarPrimeiro(numeros)); // 10
const palavras = ['maçã', 'banana', 'laranja'];
console.log('Primeira palavra:', retornarPrimeiro(palavras)); // maçã
