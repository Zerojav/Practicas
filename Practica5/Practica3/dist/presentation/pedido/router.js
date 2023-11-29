"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class PedidoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const pedidoController = new controller_1.PedidoController();
        router.get('/', pedidoController.getPedido);
        router.get('/:id', pedidoController.getPedidoById);
        router.post('/', pedidoController.createPedido);
        router.put('/:id', pedidoController.updatePedido);
        router.delete('/:id', pedidoController.deletePedido);
        return router;
    }
}
exports.PedidoRoutes = PedidoRoutes;
