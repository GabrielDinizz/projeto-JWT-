"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Configurações do Express (middlewares, rotas, etc.)
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
exports.default = app;
