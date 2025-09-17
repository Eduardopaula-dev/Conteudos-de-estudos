const quadrado = document.querySelector('.quadrado');

quadrado.addEventListener('click', () => {
    const classeAzulExiste = quadrado.classList.contains('azul');
        if (classeAzulExiste) {
            quadrado.classList.remove('azul');
        }else {
            quadrado.classList.add('azul');}
        })