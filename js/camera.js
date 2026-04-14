const botaoIniciarCamera = document.querySelector("[data-video-botao");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]")
const botaotirarFoto = document.querySelector("[data-tirar-foto]");
const mensagem = document.querySelector("[data-mensagem]");
const canvas = document.querySelector("[data-video-canvas]");
const botaoEnviarFoto = document.querySelector("[data-enviar]"); 
let imagemURL = ""

botaoIniciarCamera.addEventListener('click', async function() {
    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({video: true, audio: false})
    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";
    video.srcObject = iniciarVideo;
})

botaotirarFoto.addEventListener("click", () => {
    const contexto = canvas.getContext('2d');
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);
    imagemURL = canvas.toDataURL("image/jpeg");
    campoCamera.style.display = "none";
    mensagem.style.display = "block";
    console.log("Foto tirada");
});