const botao = document.getElementById("botao");
const corpo = document.body;

corpo.addEventListener(
    "mousemove", function (evento) {
        let mouseX = evento.clientX;
        let mouseY = evento.clientY;
        console.log(mouseX,mouseY);
    }
);


