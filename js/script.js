import ehMaiorDeIdade from "./validaidade.js";

const botao = document.querySelector('#theme-toggle');

const trocaDeTema = () => {
    const body = document.querySelector('body');
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
};

botao.addEventListener('click', trocaDeTema);

function verificaCampo(campo) {
    if(campo.name == "aniversario" && campo.value.lenght != ""){
        ehMaiorDeIdade(campo);
    }
}