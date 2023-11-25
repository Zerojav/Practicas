import { PedidoEntity } from "./pedido.entity";

export class ClienteEntity {

  constructor(
    public id: number,
    public nombre: string,
    public telefono: string,
    public direccion: string,
    public email: string,
    public pedidos?: PedidoEntity[],
  ) {}

  get Pedidos() {
    return this.pedidos;
  }

  public static fromObject( object: {[key: string]: any} ): ClienteEntity {
    const { id, nombre, telefono, direccion, email, pedidos} = object;
    if ( !id ) throw 'Id is required';
    if ( !nombre ) throw 'Nombre is required';
    if ( !telefono ) throw 'Telefono is required';
    if ( !direccion ) throw 'Direccion is required';
    if ( !email ) throw 'Email is required';

      return new ClienteEntity(id, nombre, telefono, direccion, email, pedidos)
  }

}


