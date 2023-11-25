import { Router } from 'express';
import { ClientesController } from './controller';
import { ClienteDatasourceImpl } from '../../infrastructure/datasource/cliente.datasource.impl';
import { ClienteRepositoryImpl } from '../../infrastructure/repositories/cliente.repository.impl';

export class ClienteRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new ClienteDatasourceImpl();
    const clienteRepository = new ClienteRepositoryImpl( datasource );
    const clienteController = new ClientesController(clienteRepository);
    
    router.get('/', clienteController.getClientes);
    router.get('/:id', clienteController.getClienteById );
    router.post('/', clienteController.createCliente );
    router.put('/:id', clienteController.updateCliente );
    router.delete('/:id', clienteController.deleteCliente );
    return router;
  }
}
