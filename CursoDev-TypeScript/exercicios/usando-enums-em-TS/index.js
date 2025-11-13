var Pagamento;
(function (Pagamento) {
    Pagamento["Pendente"] = "Pendente";
    Pagamento["Pago"] = "Pago";
    Pagamento["Enviado"] = "Enviado";
})(Pagamento || (Pagamento = {}));
var statusAtual = Pagamento.Pago;
console.log("Status do Pedido: ".concat(statusAtual));
