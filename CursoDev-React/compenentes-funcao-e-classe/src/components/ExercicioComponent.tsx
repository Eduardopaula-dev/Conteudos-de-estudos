/* 🧪 Exercício — Componente Saudação com Props

📌 Objetivo:
Criar um componente funcional que receba um nome via props e mostre na tela uma mensagem personalizada.

Regras
Crie um componente chamado Saudacao
Ele deve receber uma prop chamada nome
Ele deve exibir no JSX:
Olá, {nome}! Seja bem-vindo ao React! 👋
Importe e utilize o componente dentro do App.tsx, passando um nome diferente do seu

📌 Resultado esperado no navegador (exemplo):
Olá, João! Seja bem-vindo ao React! 👋

🧠 Dicas rápidas (sem revelar tudo!)

Props em componente de função são recebidas como parâmetro
Você pode desestruturar: function Saudacao({ nome }) { ... }

O componente deve ser exportado
No App.tsx você importa e exibe <Saudacao nome="Maria" />

🎯 Habilidades que você vai treinar:

Habilidade	Onde aparece
Criar componente funcional	function Saudacao()
Props	{ nome }
Reutilização de componente	Com <Saudacao nome="..." />
Import e export	Entre arquivos do React */

function Saudacao() {
    
    return (
        <h1>Olá, João! Seja bem-vindo ao React! </h1>
    )
}

export default Saudacao