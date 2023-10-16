function ler() {
    var botaoLeiaMais = document.getElementById("botao-leia-mais");
    var conteudoCompleto = document.getElementById("conteudo-completo");

    botaoLeiaMais.addEventListener("click", function () {
        if (conteudoCompleto.style.display === "none") {
            conteudoCompleto.style.display = "block";
            botaoLeiaMais.textContent = "Mostrar menos";
        } else {
            conteudoCompleto.style.display = "none";
            botaoLeiaMais.textContent = "Leia mais";
        }
    });
}

function ler2() {
    var botaoLeiaMais = document.getElementById("botao-leia-mais2");
    var conteudoCompleto = document.getElementById("conteudo-completo2");

    botaoLeiaMais.addEventListener("click", function () {
        if (conteudoCompleto.style.display === "none") {
            conteudoCompleto.style.display = "block";
            botaoLeiaMais.textContent = "Mostrar menos";
        } else {
            conteudoCompleto.style.display = "none";
            botaoLeiaMais.textContent = "Leia mais";
        }
    });
}

const body = document.body;
const openOverlayButton = document.getElementById('openOverlay');
const closeOverlayButton = document.getElementById('closeOverlay');
const overlay = document.getElementById('overlay');
openOverlayButton.addEventListener('click', () => {
  overlay.style.display = 'block';
  body.classList.add('noscroll');
});
closeOverlayButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  body.classList.remove('noscroll');
});

const openOverlayButton2 = document.getElementById('openOverlay2');
const closeOverlayButton2 = document.getElementById('closeOverlay2');
const overlay2 = document.getElementById('overlay2');
openOverlayButton2.addEventListener('click', () => {
  overlay2.style.display = 'block';
  body.classList.add('noscroll');
});
closeOverlayButton2.addEventListener('click', () => {
  overlay2.style.display = 'none';
  body.classList.remove('noscroll');
});

function entrega(){
  window.location.href = 'formulario.html';
}