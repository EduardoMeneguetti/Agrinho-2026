const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {

        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});

const voltar = document.querySelectorAll('.btn-voltar');

voltar.forEach(button => {
    button.addEventListener('click', function () {

        const atual = document.querySelector('.ativo');
        const passoAnterior = 'passo-' + this.getAttribute('data-voltar');

        atual.classList.remove('ativo');
        document.getElementById(passoAnterior).classList.add('ativo');
    });
});



let tamanhoAtual = 100;

function aumentarFonte(){
    tamanhoAtual += 10;
    document.body.style.fontSize = tamanhoAtual + "%";
}

function diminuirFonte(){
    tamanhoAtual -= 10;
    document.body.style.fontSize = tamanhoAtual + "%";
}

function altoContraste(){
    document.body.classList.toggle("contraste");
}

function lerPagina(){
    let texto = document.querySelector(".ativo").innerText;

    let fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";

    speechSynthesis.speak(fala);
}


function entrar(){

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    if(nome === "" || idade === ""){
        alert("Preencha todos os campos!");
        return;
    }

    localStorage.setItem("nomeUsuario", nome);
    localStorage.setItem("idadeUsuario", idade);

    document.getElementById("login").classList.remove("ativo");
    document.getElementById("passo-0").classList.add("ativo");

    document.getElementById("dadosUsuario").innerHTML =
        "👤 Nome: " + nome + "<br>🎂 Idade: " + idade + " anos";
}

window.onload = function(){

    const nome = localStorage.getItem("nomeUsuario");
    const idade = localStorage.getItem("idadeUsuario");

    if(nome && idade){

        document.getElementById("login").classList.remove("ativo");
        document.getElementById("passo-0").classList.add("ativo");

        document.getElementById("dadosUsuario").innerHTML =
            "👤 Nome: " + nome + "<br>🎂 Idade: " + idade + " anos";
    }
}