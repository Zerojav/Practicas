import { PedidoEntity } from '../../entities/pedido.entity';
import { PedidoRepository } from '../../repositories/pedido.repository';


export interface DeletePedidoUseCase {
  execute( id: number ): Promise<PedidoEntity>
}

export class DeletePedido implements DeletePedidoUseCase {
  
  constructor(
    private readonly repository: PedidoRepository,
  ) {}
  
  execute( id: number ): Promise<PedidoEntity> {
    return this.repository.deleteById(id);
  }

}

