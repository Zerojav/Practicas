import { UpdateClienteDto } from '../../dtos';
import { ClienteEntity } from '../../entities/cliente.entity';
import { ClienteRepository } from '../../repositories/cliente.repository';


export interface UpdateClienteUseCase {
  execute( dto: UpdateClienteDto ): Promise<ClienteEntity>
}


export class UpdateCliente implements UpdateClienteUseCase {
  
  constructor(
    private readonly repository: ClienteRepository,
  ) {}
  
  execute( dto: UpdateClienteDto ): Promise<ClienteEntity> {
    return this.repository.updateById(dto);
  }

}

