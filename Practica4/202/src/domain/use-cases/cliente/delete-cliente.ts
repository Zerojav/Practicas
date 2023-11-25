import { ClienteEntity } from '../../entities/cliente.entity';
import { ClienteRepository } from '../../repositories/cliente.repository';


export interface DeleteClienteUseCase {
  execute( id: number ): Promise<ClienteEntity>
}

export class DeleteCliente implements DeleteClienteUseCase {
  
  constructor(
    private readonly repository: ClienteRepository,
  ) {}
  
  execute( id: number ): Promise<ClienteEntity> {
    return this.repository.deleteById(id);
  }

}

