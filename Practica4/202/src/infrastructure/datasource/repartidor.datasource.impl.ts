import { prisma } from '../../data/postgres';
import { CreateRepartidorDto, RepartidorDatasource, RepartidorEntity, UpdateRepartidorDto } from '../../domain';




export class RepartidorDatasourceImpl implements RepartidorDatasource {

  async create( createRepartidorDto: CreateRepartidorDto ): Promise<RepartidorEntity> {
    const { pedidos, ...rest } =  createRepartidorDto
    const repartidor = await prisma.repartidor.create({
      data: rest
    });

    return RepartidorEntity.fromObject( repartidor );
  }

  async getAll(): Promise<RepartidorEntity[]> {
    const repartidors = await prisma.repartidor.findMany();
    return repartidors.map( repartidor => RepartidorEntity.fromObject(repartidor) );
  }

  async findById( id: number ): Promise<RepartidorEntity> {
    const repartidor = await prisma.repartidor.findFirst({
      where: { id }
    });

    if ( !repartidor ) throw `Repartidor with id ${ id } not found`;
    return RepartidorEntity.fromObject(repartidor);
  }

  async updateById( updateRepartidorDto: UpdateRepartidorDto ): Promise<RepartidorEntity> {
    await this.findById( updateRepartidorDto.id );
    
    const updatedRepartidor = await prisma.repartidor.update({
      where: { id: updateRepartidorDto.id },
      data: updateRepartidorDto!.values
    });

    return RepartidorEntity.fromObject(updatedRepartidor);
  }

  async deleteById( id: number ): Promise<RepartidorEntity> {
    await this.findById( id );
    const deleted = await prisma.repartidor.delete({
      where: { id }
    });

    return RepartidorEntity.fromObject( deleted );
  }

}