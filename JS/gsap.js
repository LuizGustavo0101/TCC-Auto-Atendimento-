//------------------------- Tela de carregamento -----------------------//

// Variaveis
var mensagem1 = document.querySelector(".efeito1");
var mensagem2 = document.querySelector(".efeito2");
var mensagem3 = document.querySelector(".efeito3");
var mensagem4 = document.querySelector(".efeito4");
var mensagem5 = document.querySelector(".efeito5");
var mensagem6 = document.querySelector(".efeito6");
var mensagem7 = document.querySelector(".efeito7");
var mensagem8 = document.querySelector(".efeito8");
var mensagem9 = document.querySelector(".efeito9");
var mensagem10 = document.querySelector(".efeito10");
var mensagem11 = document.querySelector(".efeito11");
var mensagem12 = document.querySelector(".efeito12");
var resposta = document.querySelector(".resposta");

var containerModal = document.querySelector("#containerLogin");

// (biblioteca) - timeline usado para carregar um apos outro
let tl = gsap.timeline()

tl.to(".bola1", {y:-40, duration:0.5, repeat:-1, yoyo: true, ease: "easeOut"}, 0);
tl.to(".bola2", {y:-40, duration:0.5, repeat:-1, delay:0.1, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola3", {y:-40, duration:0.5, repeat:-1, delay:0.15, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola4", {y:-40, duration:0.5, repeat:-1, delay:0.2, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola5", {y:-40, duration:0.5, repeat:-1, delay:0.25, yoyo: true, ease: "easeOut"}, "<");

// carregar depois que todo o conteudo carregar
// ou seja, o contador começará depois que tudo carregar
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector("#container1").style.display = "none";
    }, 6000);

    mensagem1.style.display = "none";
    mensagem2.style.display = "none";
    mensagem3.style.display = "none";
    mensagem4.style.display = "none";
    mensagem5.style.display = "none";
    mensagem6.style.display = "none";
    mensagem7.style.display = "none";
    mensagem8.style.display = "none";
    mensagem9.style.display = "none";
    mensagem10.style.display = "none";
    mensagem11.style.display = "none";
});
  
// entrada do cabeçalho
setTimeout(function(){
    gsap.to("#cabecalho", {
        y:80,
        duration:1,
        ease: "easeIn",
    })
}, 6500);

// Envio de msm efeito
setTimeout(function(){

    mensagem1.style.display = "flex";
    mensagem2.style.display = "flex";

    gsap.from(".efeito1", {
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    gsap.from(".efeito2", {
        y: 80,
        opacity:0,
        delay:0.5,
        duration:0.3,
    })

    setTimeout(function(){
        resposta.style.display = "block";

        gsap.from(".resposta", {
            y:80,
            opacity:0,
            delay:0.2,
            duration:0.2,
        })
    }, 700);
}, 8000);