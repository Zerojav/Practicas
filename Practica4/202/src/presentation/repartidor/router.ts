import { Router } from 'express';
import { RepartidorsController } from './controller';
import { RepartidorRepositoryImpl } from '../../infrastructure/repositories/repartidor.repository.impl';
import { RepartidorDatasourceImpl } from '../../infrastructure/datasource/repartidor.datasource.impl';

export class RepartidorRoutes {
  
  static get routes(): Router {
    
    const router = Router();
    
    const datasource = new RepartidorDatasourceImpl();
    const repartidorRepository = new RepartidorRepositoryImpl( datasource );
    const repartidorController = new RepartidorsController(repartidorRepository);

    router.get('/', repartidorController.getRepartidors);
    router.get('/:id', repartidorController.getRepartidorById );
    router.post('/', repartidorController.createRepartidor );
    router.put('/:id', repartidorController.updateRepartidor );
    router.delete('/:id', repartidorController.deleteRepartidor );
    return router;
  }
}
