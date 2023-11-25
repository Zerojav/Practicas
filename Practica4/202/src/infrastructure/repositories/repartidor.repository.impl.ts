import { CreateRepartidorDto, RepartidorDatasource, RepartidorEntity, RepartidorRepository, UpdateRepartidorDto } from '../../domain';


export class RepartidorRepositoryImpl implements RepartidorRepository {

  constructor(
    private readonly datasource: RepartidorDatasource,
  ) { }


  create( createRepartidorDto: CreateRepartidorDto ): Promise<RepartidorEntity> {
    return this.datasource.create( createRepartidorDto );
  }

  getAll(): Promise<RepartidorEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<RepartidorEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateRepartidorDto: UpdateRepartidorDto ): Promise<RepartidorEntity> {
    return this.datasource.updateById( updateRepartidorDto );
  }

  deleteById( id: number ): Promise<RepartidorEntity> {
    return this.datasource.deleteById( id );
  }

}


