const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const pergunta = item.querySelector('.pergunta');
    const resposta = item.querySelector('.resposta');

    pergunta.addEventListener('click', e => {
        e.preventDefault();
        
        const aberto = item.classList.contains('ativo');

        faqItems.forEach(i => {
            i.classList.remove('ativo');
            i.querySelector('.resposta').style.maxHeight = null;
        });

        if (!aberto) {
            item.classList.add('ativo');
            resposta.style.maxHeight = resposta.scrollHeight + 'px';
        }
    });
});