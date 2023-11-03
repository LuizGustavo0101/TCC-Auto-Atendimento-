// configuração do site
function sim(){
    var primeira = document.querySelector(".primeiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Sim</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);

    setTimeout(function(){
        var modalLogin = document.querySelector("#containerLogin");
        modalLogin.style.display = "flex";
    }, 500)

    // sumir com as opções
    gsap.to(".resposta", {
        y:80,
        opacity:0,
        delay:0.3,
        duration:0.5,
    });
}

function nao(){
    var primeira = document.querySelector(".primeiraParte");

    var resposta = document.createElement("div");
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Não</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `
    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);

    document.querySelector(".efeito3").style.display = "flex";
    document.querySelector(".efeito4").style.display = "flex";
    
    gsap.from(".efeito3", {
        delay:0.5,
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    gsap.from(".efeito4", {
        y: 80,
        opacity:0, 
        delay: 1,
        duration:0.3,
    })

    // sumir com as opções
    gsap.to(".resposta", {
        y:80,
        opacity:0,
        delay:0.3,
        duration:0.5,
    })
}

// fechar modals
function fechar(){
    var modalLogin = document.querySelector("#containerLogin");
    modalLogin.style.display = "none";

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
}

// na parte do modal do login
function verificar(){
    var email = document.querySelector("#usuario").value;
    var senha = document.querySelector("#senha").value;

    switch(true){
        case(email == ""):
            alert("Preencha o email")
        break

        case(senha == ""):
            alert("Preencha o senha")
        break

        case(email == "" && senha == ""):
            alert("Preencha todos os campos")
        break

        default:
            alert("Entrando")
            document.querySelector("#containerLogin").style.display = "none";
            email = "";
            senha = "";

            document.querySelector(".efeito3").style.display = "flex";
            document.querySelector(".efeito4").style.display = "flex";
            
            gsap.from(".efeito3", {
                delay:0.5,
                y: 80,
                opacity:0, 
                duration:0.3,
            })

            gsap.from(".efeito4", {
                y: 80,
                opacity:0, 
                delay: 1,
                duration:0.3,
            })
    }
}

// parte de chamar o modal do cadastro
function criarConta(){
    document.querySelector(".login").style.display = "none";
    document.querySelector(".cadastro").style.display = "block";
}

// verificar botão da parte de criar conta
function verificarConta(){
    var usuario = document.querySelector("#nome").value;
    var login = document.querySelector("#login").value;
    var senha = document.querySelector("#senhaCriar").value;

    switch(true){
        case(usuario == ""):
            alert("Preencha o seu nome")
        break

        case(login == ""):
            alert("Preencha o email")
        break

        case(senha == ""):
            alert("Preencha o senha")
        break

        case(login == "" && senha == "" && usuario == ""):
            alert("Preencha todos os campos")
        break

        default:
            alert("Entrando")
            document.querySelector("#containerLogin").style.display = "none";
            email = "";
            senha = "";

            document.querySelector(".efeito3").style.display = "flex";
            document.querySelector(".efeito4").style.display = "flex";
            
            gsap.from(".efeito3", {
                delay:0.5,
                y: 80,
                opacity:0, 
                duration:0.3,
            })

            gsap.from(".efeito4", {
                y: 80,
                opacity:0, 
                delay: 1,
                duration:0.3,
            })
    }
}

// dar zoom na foto do cardápio
var cardapio = document.querySelector(".cardapio")
cardapio.addEventListener("click", function(){
    cardapio.classList.toggle("zoomImagem");
})

function sairMouse(){
    var cardapio = document.querySelector(".cardapio")
    cardapio.classList.remove("zoomImagem");
}
