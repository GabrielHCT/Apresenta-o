let indiceAtual = 0;
const proximoEl = document.querySelector('#proximo');
const anteriorEl = document.querySelector('#anterior');
const fotoEl = document.querySelector('#foto');

fotos = [
    'imgs/1 Foto.jpg',
    'imgs/2 Foto.jpg',
    'imgs/3 Foto.jpg',
    'imgs/4 Foto.jpg',
    'imgs/5 Foto.jpg'
];

function alterarFoto(valor) {
  indiceAtual += valor;

  if(indiceAtual == fotos.length)
    indiceAtual = 0;
  else if(indiceAtual < 0)
    indiceAtual = fotos.length - 1;

  fotoEl.src = fotos[indiceAtual];
}

proximoEl.addEventListener('click', function() {
  alterarFoto(1);
});

anteriorEl.addEventListener('click', function() {
  alterarFoto(-1);
});