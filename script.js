const avança = document.querySelectorAll('.btn-proximo');

avança.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    } )
})

document.querySelectorAll('.btn-voltar').forEach(botao => {
    botao.addEventListener('click', () => {
        const anterior = botao.dataset.voltar;

        document.querySelectorAll('.passo').forEach(passo => {
            passo.style.display = 'none';
        });

        document.getElementById(`passo-${anterior}`).style.display = 'block';
    });
});