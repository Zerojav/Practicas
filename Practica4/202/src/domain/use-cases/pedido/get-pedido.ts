import { PedidoEntity } from '../../entities/pedido.entity';
import { PedidoRepository } from '../../repositories/pedido.repository';


export interface GetPedidoUseCase {
  execute( id: number ): Promise<PedidoEntity>
}


export class GetPedido implements GetPedidoUseCase {
  
  constructor(
    private readonly repository: PedidoRepository,
  ) {}
  
  execute( id: number ): Promise<PedidoEntity> {
    return this.repository.findById(id);
  }

}

