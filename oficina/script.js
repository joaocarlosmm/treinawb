const botao = document.getElementById("botao");
const corpo = document.body;

corpo.addEventListener("mousemove", function (evento) {
    let mouseX = evento.clientX;
    let mouseY = evento.clientY;
    let posicaoBotao = botao.getBoundingClientRect();
    const distanciaLimite = 100;
    let centroBotaoX = posicaoBotao.left + posicaoBotao.width / 2;
    let centroBotaoY = posicaoBotao.top + posicaoBotao.height / 2;
    let distanciaX = mouseX - centroBotaoX;
    let distanciaY = mouseY - centroBotaoY;

    if (Math.abs(distanciaX) < distanciaLimite && Math.abs(distanciaY) < distanciaLimite) {

        let moverX = (distanciaX > 0 ? -1 : 1) * distanciaLimite;
        let moverY = (distanciaY > 0 ? -1 : 1) * distanciaLimite;

    }

}
);


function clicou() {
    alert("Olá")
}