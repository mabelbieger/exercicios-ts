"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTempoExecucao = logTempoExecucao;
function logTempoExecucao(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const inicio = performance.now();
        const resultado = metodoOriginal.apply(this, args);
        const fim = performance.now();
        console.log(`${propertyKey} executado em ${(fim - inicio).toFixed(3)} ms`);
        return resultado;
    };
}
