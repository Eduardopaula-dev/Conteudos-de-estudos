/* 🧩 Exercício 3 — Preço Promocional (difícil)

🎯 Objetivo:
Criar um componente que mostra dois preços apenas se existir um preço promocional.

📝 Regras:
    Props:
    name: string
    price: number
    promoPrice?: number
Se promoPrice existir:
    Mostrar o preço original riscado
    Mostrar o preço promocional destacado
Se não existir:
    Mostrar só o preço normal
No pai → 3 produtos:
    1 com promo
    1 sem promo
    1 com promo bem abaixo do preço normal
💡 Dica:
Aqui o condicional provavelmente vai precisar comparar:
promoPrice ? (...) : (...) */

type PriceProps = {
    name: string;
    price: number;
    promoPrice?: number;
}

const Price = ({ name, price, promoPrice }: PriceProps) => {
    return (
        <div>
            <h1>{name}</h1>
            {promoPrice ? (
                <>
                    <p>De R$ {price}</p>
                    <p>Por R${promoPrice}</p>
                </>
            ) : (
                <p>{price}</p>
            )}
        </div>
    )
}

export default Price