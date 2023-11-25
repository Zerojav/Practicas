import { Router } from 'express';
import { PedidosController } from './controller';
import { PedidoDatasourceImpl } from '../../infrastructure/datasource/pedido.datasource.impl';
import { PedidoRepositoryImpl } from '../../infrastructure/repositories/pedido.repository.impl';

export class PedidoRoutes {

  static get routes(): Router {
  
    const router = Router();

    const datasource = new PedidoDatasourceImpl();
    const pedidoRepository = new PedidoRepositoryImpl( datasource );
    const pedidoController = new PedidosController(pedidoRepository);


    router.get('/', pedidoController.getPedidos);
    router.get('/:id', pedidoController.getPedidoById );
    router.post('/', pedidoController.createPedido );
    router.put('/:id', pedidoController.updatePedido );
    router.delete('/:id', pedidoController.deletePedido );

    return router;
  }
}
