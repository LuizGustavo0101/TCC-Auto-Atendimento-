//------------------------- Tela de carregamento -----------------------//

// (biblioteca) - timeline usado para carregar um apos outro
let tl = gsap.timeline()

tl.to(".bola1", {y:-60, duration:1, repeat:-1, yoyo: true, ease: "easeOut"}, 0);
tl.to(".bola2", {y:-60, duration:1, repeat:-2, delay:0.1, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola3", {y:-60, duration:1, repeat:-2, delay:0.2, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola4", {y:-60, duration:1, repeat:-2, delay:0.3, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola5", {y:-60, duration:1, repeat:-2, delay:0.3, yoyo: true, ease: "easeOut"}, "<");

// carregar depois que todo o conteudo carregar
// ou seja, o contador começará depois que tudo carregar
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector("#container3").style.display = "none";
    }, 5000);
});
  
