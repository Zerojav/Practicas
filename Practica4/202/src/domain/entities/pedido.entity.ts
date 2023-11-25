export class PedidoEntity {

    constructor(
      public id: number,
      public idCliente: string,
      public idRepartidor: string,
      public fechaPedido: string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): PedidoEntity {
      const { id, idCliente, idRepartidor, fechaPedido } = object;
      if ( !id ) throw 'Id is required';
      if ( !idCliente ) throw 'idCliente is required';
      if ( !idRepartidor ) throw 'idRepartidor is required';
      if ( !fechaPedido ) throw 'fechaPedido ID is required';
  
        return new PedidoEntity(id, idCliente, idRepartidor, fechaPedido)
    }
  
  }
  
  
  