"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const cliente_datasource_impl_1 = require("../../infrastructure/datasource/cliente.datasource.impl");
const cliente_repository_impl_1 = require("../../infrastructure/repositories/cliente.repository.impl");
class ClienteRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new cliente_datasource_impl_1.ClienteDatasourceImpl();
        const clienteRepository = new cliente_repository_impl_1.ClienteRepositoryImpl(datasource);
        const clienteController = new controller_1.ClientesController(clienteRepository);
        router.get('/', clienteController.getClientes);
        router.get('/:id', clienteController.getClienteById);
        router.post('/', clienteController.createCliente);
        router.put('/:id', clienteController.updateCliente);
        router.delete('/:id', clienteController.deleteCliente);
        return router;
    }
}
exports.ClienteRoutes = ClienteRoutes;
