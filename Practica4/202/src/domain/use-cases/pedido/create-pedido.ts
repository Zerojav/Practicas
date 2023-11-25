import { CreatePedidoDto } from '../../dtos';
import { PedidoEntity } from '../../entities/pedido.entity';
import { PedidoRepository } from '../../repositories/pedido.repository';


export interface CreatePedidoUseCase {
  execute( dto: CreatePedidoDto ): Promise<PedidoEntity>
}

// ctrl+ shift + l
export class CreatePedido implements CreatePedidoUseCase {
  
  constructor(
    private readonly repository: PedidoRepository,
  ) {}
  
  execute( dto: CreatePedidoDto ): Promise<PedidoEntity> {
    return this.repository.create(dto);
  }

}

