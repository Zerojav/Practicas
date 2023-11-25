export class UpdatePedidoDto {
    private constructor(
        public readonly id: number,
        public readonly idCliente?: number,
        public readonly idRepartidor?: number,
        public readonly fechaPedido?: Date
    ){}
    get values() {
        const returnObj: {[key: string]: any} = {};

        if(this.idCliente) returnObj.idCliente = this.idCliente;
        if(this.idRepartidor) returnObj.idRepartidor = this.idRepartidor;
        if(this.fechaPedido) returnObj.fechaPedido = this.fechaPedido;
       
        return returnObj;
    }
    static create( props: {[key:string]: any} ): [string?, UpdatePedidoDto?]  {
  
        const { id, idCliente, idRepartidor, fechaPedido } = props;
    
        if ( !id || isNaN( Number(id)) ) {
          return ['id must be a valid number'];
        }
    
        if ( !idCliente && !idRepartidor && !fechaPedido) {
          return ['At least one property must be provided'];
        }
        return [undefined, new UpdatePedidoDto(id, idCliente, idRepartidor, fechaPedido)];
      }
    
    
    }