export class CreatePedidoDto{
    private constructor(
        public readonly idCliente: number,
        public readonly idRepartidor: number
    ){}

    static create(props: {[key:string]: any} ): [string?, CreatePedidoDto?] {

    const { idCliente, idRepartidor} = props;
      if ( !idCliente ) return ['idCliente property is required', undefined];
      if ( !idRepartidor ) return ['idRepartidor property is required', undefined];
      return [undefined, new CreatePedidoDto(idCliente, idRepartidor)];
      }
}