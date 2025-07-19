import { logTempoExecucao } from './decorator';

export class Carro {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  @logTempoExecucao
  obterDetalhes(): string {
    return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
  }
}
