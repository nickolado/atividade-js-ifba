const btnAbrirCamera = document.getElementById('btnAbrirCamera');
const btnCapturar = document.getElementById('btnCapturar');
const btnCancelarCamera = document.getElementById('btnCancelarCamera');
const btnRemoverFoto = document.getElementById('btnRemoverFoto');
const cameraContainer = document.getElementById('cameraContainer');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const fotoCapturada = document.getElementById('fotoCapturada');
const fotoPlaceholder = document.getElementById('fotoPlaceholder');
let stream = null;

btnAbrirCamera.addEventListener('click', async () => {
   try {
   stream = await navigator.mediaDevices.getUserMedia({ video: true });
   video.srcObject = stream;
   cameraContainer.style.display = 'block';
   btnAbrirCamera.style.display = 'none';
   } catch (err) {
        alert('Não foi possível acessar a câmera.');
   }
 });


btnCapturar.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL('image/png');
    fotoCapturada.src = dataUrl;
    fotoCapturada.style.display = 'block';
    fotoPlaceholder.style.display = 'none';
    btnRemoverFoto.style.display = 'inline-flex';
    pararCamera();
});


btnCancelarCamera.addEventListener('click', () => {
    pararCamera();
});

btnRemoverFoto.addEventListener('click', () => {
    fotoCapturada.src = '';
    fotoCapturada.style.display = 'none';
    fotoPlaceholder.style.display = 'flex';
    btnRemoverFoto.style.display = 'none';
    btnAbrirCamera.style.display = 'inline-flex';
});

function pararCamera() {
    if (stream) {
        stream.getTracks().forEach(t => t.stop());
        stream = null;
    }
    cameraContainer.style.display = 'none';
    btnAbrirCamera.style.display = 'inline-flex';
}