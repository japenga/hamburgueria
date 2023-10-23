function enviar(){
    this.window.location = "index2.html";
}
function voltar(){
    this.window.location = "index.html";
}

const elemento1 = document.getElementById("header");
const elemento2 = document.getElementById("header2");
const elemento3 = document.getElementById("drop");

function itens(){
    elemento2.style.visibility = "visible";
    elemento2.style.transition = ".1s";
    
    }
function sair(){
    elemento2.style.visibility = "hidden";
}
function menuShow(){
    elemento3.style.display = "block";
}