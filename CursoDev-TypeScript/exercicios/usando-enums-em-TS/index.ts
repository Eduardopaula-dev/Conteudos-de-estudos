enum Pagamento {
    Pendente = "Pendente",
    Pago = "Pago",
    Enviado = "Enviado",
}

const statusAtual: Pagamento = Pagamento.Pago
console.log(`Status do Pedido: ${statusAtual}`);