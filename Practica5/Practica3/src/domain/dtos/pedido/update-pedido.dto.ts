export class UpdatePedidoDto {
    private constructor(
        public readonly id: number,
        public readonly idCliente: number,
        public readonly idRepartidor: number,
        public readonly fechaPedido?: Date
    ){}
    get values() {
        const returnObj: {[key: string]: any} = {};

        if(this.fechaPedido) returnObj.fechaPedido = this.fechaPedido;
       
        return returnObj;
    }
    static create(props: {
        id: number,
        idCliente: number,
        idRepartidor: number,
        fechaPedido: Date
    }): UpdatePedidoDto {
        const {id, idCliente, idRepartidor, fechaPedido} = props;
        return new UpdatePedidoDto(id, idCliente, idRepartidor, fechaPedido);
    }
}