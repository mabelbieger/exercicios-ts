import express, { Request, Response, NextFunction } from 'express';
import { Carro } from './classes';
import { retornarPrimeiro } from './generics';
import { errorHandler } from './middleware';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  const meuCarro = new Carro('Toyota', 'Corolla', 2020);
  const detalhes = meuCarro.obterDetalhes();

  const nums = [1, 2, 3];
  const primeiroNumero = retornarPrimeiro(nums);

  res.json({
    detalhesCarro: detalhes,
    primeiroNumero,
  });
});

app.get('/erro', (req: Request, res: Response) => {
  throw new Error('Algo deu errado aqui!');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
