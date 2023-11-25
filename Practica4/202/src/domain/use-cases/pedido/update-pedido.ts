import { UpdatePedidoDto } from '../../dtos';
import { PedidoEntity } from '../../entities/pedido.entity';
import { PedidoRepository } from '../../repositories/pedido.repository';


export interface UpdatePedidoUseCase {
  execute( dto: UpdatePedidoDto ): Promise<PedidoEntity>
}


export class UpdatePedido implements UpdatePedidoUseCase {
  
  constructor(
    private readonly repository: PedidoRepository,
  ) {}
  
  execute( dto: UpdatePedidoDto ): Promise<PedidoEntity> {
    return this.repository.updateById(dto);
  }

}

