enum StatusPedido {
  Pendente = "Pendente",
  Pago = "Pago",
  Enviando = "Enviando",
}

// vatiavel tipada com enum
const statusAtual: StatusPedido = StatusPedido.Pago;

//exibindo no console
console.log(StatusPedido.Pago);
