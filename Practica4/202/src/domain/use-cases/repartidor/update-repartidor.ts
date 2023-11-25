import { UpdateRepartidorDto } from '../../dtos';
import { RepartidorEntity } from '../../entities/repartidor.entity';
import { RepartidorRepository } from '../../repositories/repartidor.repository';


export interface UpdateRepartidorUseCase {
  execute( dto: UpdateRepartidorDto ): Promise<RepartidorEntity>
}


export class UpdateRepartidor implements UpdateRepartidorUseCase {
  
  constructor(
    private readonly repository: RepartidorRepository,
  ) {}
  
  execute( dto: UpdateRepartidorDto ): Promise<RepartidorEntity> {
    return this.repository.updateById(dto);
  }

}

