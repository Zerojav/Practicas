import { CreateRepartidorDto } from '../../dtos';
import { RepartidorEntity } from '../../entities/repartidor.entity';
import { RepartidorRepository } from '../../repositories/repartidor.repository';


export interface CreateRepartidorUseCase {
  execute( dto: CreateRepartidorDto ): Promise<RepartidorEntity>
}

// ctrl+ shift + l
export class CreateRepartidor implements CreateRepartidorUseCase {
  
  constructor(
    private readonly repository: RepartidorRepository,
  ) {}
  
  execute( dto: CreateRepartidorDto ): Promise<RepartidorEntity> {
    return this.repository.create(dto);
  }

}

