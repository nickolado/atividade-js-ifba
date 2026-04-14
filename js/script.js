import ehMaiorDeIdade from "./validaidade.js";

const camposDoFormulario = document.querySelectorAll("[required]");
const botao = document.querySelector('#theme-toggle');

// alternar tema
const trocaDeTema = () => {
    const body = document.querySelector('body');
    const currentTheme = body.getAttribute('data-theme');

    body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
};

botao.addEventListener('click', trocaDeTema);

// validação dos campos
camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

function verificaCampo(campo) {
    // corrigido: name correto é "nasc"
    if (campo.name === "nasc" && campo.value !== "") {
        ehMaiorDeIdade(campo);
    }
}