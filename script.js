const avança = document.querySelectorAll('.btn-proximo');

avança.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    } )
})

document.getElementById("btn-voltar").addEventListener("click", () => {
    if (passoAtual > 0) {
        passos[passoAtual].classList.remove("ativo");
        passoAtual--;
        passos[passoAtual].classList.add("ativo");
    }
});