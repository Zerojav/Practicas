"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepartidorRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const repartidor_repository_impl_1 = require("../../infrastructure/repositories/repartidor.repository.impl");
const repartidor_datasource_impl_1 = require("../../infrastructure/datasource/repartidor.datasource.impl");
class RepartidorRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new repartidor_datasource_impl_1.RepartidorDatasourceImpl();
        const repartidorRepository = new repartidor_repository_impl_1.RepartidorRepositoryImpl(datasource);
        const repartidorController = new controller_1.RepartidorsController(repartidorRepository);
        router.get('/', repartidorController.getRepartidors);
        router.get('/:id', repartidorController.getRepartidorById);
        router.post('/', repartidorController.createRepartidor);
        router.put('/:id', repartidorController.updateRepartidor);
        router.delete('/:id', repartidorController.deleteRepartidor);
        return router;
    }
}
exports.RepartidorRoutes = RepartidorRoutes;
