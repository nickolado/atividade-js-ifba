import ehMaiorDeIdade from "./validaidade.js";

const camposDoFormulario = document.querySelectorAll("[required]");
const botao = document.querySelector('#theme-toggle');
const form = document.querySelector('#formCadastro');


botao.addEventListener('click', () => {
    const body = document.body;
    const temaAtual = body.getAttribute('data-theme');

    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', novoTema);

    localStorage.setItem('tema', novoTema);

    botao.innerHTML = novoTema === 'dark' ? '🌙' : '☀️';
});


campos.forEach((campo) => {
    campo.addEventListener('invalid', function (e) {
        e.preventDefault();

        if (campo.name === 'nome') {
            campo.setCustomValidity('Digite seu nome completo (mín. 5 caracteres)');
        } else if (campo.name === 'email') {
            campo.setCustomValidity('Digite um email válido');
        } else if (campo.name === 'whatsapp') {
            campo.setCustomValidity('Informe um WhatsApp válido');
        } else {
            campo.setCustomValidity('Preencha este campo');
        }
    });

    campo.addEventListener('input', () => {
        campo.setCustomValidity('');
    });
});

function verificaCampo(campo) {
    // corrigido: name correto é "nasc"
    if (campo.name === "nasc" && campo.value !== "") {
        ehMaiorDeIdade(campo);
    }
}

window.onload = () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
        document.body.setAttribute('data-theme', temaSalvo);
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    form.innerHTML = "<h2>Cadastro enviado com sucesso ✅</h2>";
});