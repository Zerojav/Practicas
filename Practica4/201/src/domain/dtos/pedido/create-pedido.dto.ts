export class CreatePedidoDto{
    private constructor(
        public readonly idCliente: number,
        public readonly idRepartidor: number
    ){}

    static create(props: {
        idCliente: number,
        idRepartidor: number
    }):
    CreatePedidoDto{
        const {idCliente, idRepartidor} = props;
        return new CreatePedidoDto(idCliente, idRepartidor);
    
    }
}