//------------------------- Tela de carregamento -----------------------//

// Variaveis
var mensagem1 = document.querySelector(".efeito1");
var mensagem2 = document.querySelector(".efeito2");
var mensagem3 = document.querySelector(".efeito3");
var mensagem4 = document.querySelector(".efeito4");
var resposta = document.querySelector(".resposta");

var containerModal = document.querySelector("#containerLogin");

// (biblioteca) - timeline usado para carregar um apos outro
let tl = gsap.timeline()

tl.to(".bola1", {y:-40, duration:1, repeat:-1, yoyo: true, ease: "easeOut"}, 0);
tl.to(".bola2", {y:-40, duration:1, repeat:-1, delay:0.1, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola3", {y:-40, duration:1, repeat:-1, delay:0.2, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola4", {y:-40, duration:1, repeat:-1, delay:0.3, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola5", {y:-40, duration:1, repeat:-1, delay:0.3, yoyo: true, ease: "easeOut"}, "<");

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
setTimeout(function() {

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
}, 7500);

document.querySelector(".fechar").addEventListener("click", function(){
    document.querySelector(".efeito3").style.display = "flex";
    document.querySelector(".efeito4").style.display = "flex";
    
    gsap.from(".efeito3", {
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    gsap.from(".efeito4", {
        y: 80,
        opacity:0, 
        delay: 0.5,
        duration:0.3,
    })
})

// fazer aparecer as escolhas
