"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Pendente"] = "Pendente";
    StatusPedido["Pago"] = "Pago";
    StatusPedido["Enviando"] = "Enviando";
})(StatusPedido || (StatusPedido = {}));
// vatiavel tipada com enum
const statusAtual = StatusPedido.Pago;
//exibindo no console
console.log(StatusPedido.Pago);
