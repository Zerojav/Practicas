import { CreateClienteDto } from '../../dtos';
import { ClienteEntity } from '../../entities/cliente.entity';
import { ClienteRepository } from '../../repositories/cliente.repository';


export interface CreateClienteUseCase {
  execute( dto: CreateClienteDto ): Promise<ClienteEntity>
}

// ctrl+ shift + l
export class CreateCliente implements CreateClienteUseCase {
  
  constructor(
    private readonly repository: ClienteRepository,
  ) {}
  
  execute( dto: CreateClienteDto ): Promise<ClienteEntity> {
    return this.repository.create(dto);
  }

}

