"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const pedido_datasource_impl_1 = require("../../infrastructure/datasource/pedido.datasource.impl");
const pedido_repository_impl_1 = require("../../infrastructure/repositories/pedido.repository.impl");
class PedidoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new pedido_datasource_impl_1.PedidoDatasourceImpl();
        const pedidoRepository = new pedido_repository_impl_1.PedidoRepositoryImpl(datasource);
        const pedidoController = new controller_1.PedidosController(pedidoRepository);
        router.get('/', pedidoController.getPedidos);
        router.get('/:id', pedidoController.getPedidoById);
        router.post('/', pedidoController.createPedido);
        router.put('/:id', pedidoController.updatePedido);
        router.delete('/:id', pedidoController.deletePedido);
        return router;
    }
}
exports.PedidoRoutes = PedidoRoutes;
