"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const classes_1 = require("./classes");
const generics_1 = require("./generics");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    const meuCarro = new classes_1.Carro('Toyota', 'Corolla', 2020);
    const detalhes = meuCarro.obterDetalhes();
    const nums = [1, 2, 3];
    const primeiroNumero = (0, generics_1.retornarPrimeiro)(nums);
    res.json({
        detalhesCarro: detalhes,
        primeiroNumero,
    });
});
app.get('/erro', (req, res) => {
    throw new Error('Algo deu errado aqui!');
});
app.use(middleware_1.errorHandler);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
