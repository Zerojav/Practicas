import { PedidoEntity } from '../../entities/pedido.entity';
import { PedidoRepository } from '../../repositories/pedido.repository';


export interface GetPedidosUseCase {
  execute(): Promise<PedidoEntity[]>
}


export class GetPedidos implements GetPedidosUseCase {
  
  constructor(
    private readonly repository: PedidoRepository,
  ) {}
  
  execute(): Promise<PedidoEntity[]> {
    return this.repository.getAll();
  }

}

