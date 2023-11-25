import { Router } from 'express';
import { RepartidorController } from './controller';

export class RepartidorRoutes {
  static get routes(): Router {
    const router = Router();
    const repartidorController = new RepartidorController();
    router.get('/', repartidorController.getRepartidor);
    router.get('/:id', repartidorController.getRepartidorById );
    router.post('/', repartidorController.createRepartidor );
    router.put('/:id', repartidorController.updateRepartidor );
    router.delete('/:id', repartidorController.deleteRepartidor );
    return router;
  }
}
