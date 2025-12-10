/* 🧩 Exercício 2 — HighlightCard

🎯 Dicas:

Pense no Card como uma “caixa” que precisa:
    borda
    padding
    sombra leve
O título será passado via prop → então ele deve ficar fixo no topo
O restante do conteúdo deve vir via children → então você só coloca {children} abaixo do título
Só crie esse componente e não deixe o CSS inline, faça no arquivo .css para praticar organização
No Pai → crie 3 cards diferentes:
    um com lista
    um com parágrafo
    um com um <strong> ou <span> destacado
💬 Pergunta para te guiar:
Onde você posiciona o {children} dentro do JSX para permitir qualquer conteúdo? */

type HighlightCardProps = {
    title: string;
    children: React.ReactNode;
}

const HighlightCard = ({ title, children }: HighlightCardProps) => {
    return (
        <div className="cardhighlight">
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default HighlightCard;