"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const router_1 = require("./cliente/router");
const router_2 = require("./repartidor/router");
const router_3 = require("./pedido/router");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/cliente', router_1.ClienteRoutes.routes);
        router.use('/api/repartidor', router_2.RepartidorRoutes.routes);
        router.use('/api/pedido', router_3.PedidoRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
