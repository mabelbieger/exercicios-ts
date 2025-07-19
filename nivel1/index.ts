let nome: string = "Marina";
let idade: number = 18;
let ativo: boolean = true;

let hobbies: string[] = ["ler", "assistir filmes", "ouvir música"];

let ponto: [number, number] = [10, 20];

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Ativo:", ativo);
console.log("Hobbies:", hobbies.join(", "));
console.log("Ponto:", ponto);

function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
  if (imc < 18.5) return "Abaixo do peso";
  else if (imc < 25) return "Normal";
  else if (imc < 30) return "Sobrepeso";
  else return "Obesidade";
}

const imc = calcularIMC(70, 1.75);
const classificacao = classificarIMC(imc);

console.log(`IMC: ${imc.toFixed(2)} - Classificação: ${classificacao}`);

interface Pessoa {
  nome: string;
  email?: string;
  idade: number;
}

const pessoa1: Pessoa = {
  nome: "Vitor",
  idade: 17,
  email: "vitor@email.com"
};

console.log("Pessoa:", pessoa1);
