"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    console.error('Erro capturado:', err);
    res.status(err.status || 500).json({
        error: err.message || 'Erro interno no servidor',
        code: err.status || 500,
    });
}
