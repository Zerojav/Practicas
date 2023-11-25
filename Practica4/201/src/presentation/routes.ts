import { Router } from 'express';
import { ClienteRoutes } from './cliente/router';
import { RepartidorRoutes } from './repartidor/router';
import { PedidoRoutes } from './pedido/router';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/cliente', ClienteRoutes.routes );
    router.use('/api/repartidor', RepartidorRoutes.routes );
    router.use('/api/pedido', PedidoRoutes.routes );

    return router;
  }


}

