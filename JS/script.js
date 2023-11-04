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

    // sumir com as opções
    gsap.to(".resposta", {
        y:80,
        opacity:0,
        delay:0.6,
        duration:0.5,
    })

    document.querySelector(".efeito3").style.display = "flex";
    document.querySelector(".efeito4").style.display = "flex";
    document.querySelector(".efeito5").style.display = "flex";
    
    let tl = gsap.timeline();

    tl.from(".efeito3", {
        delay:0.5,
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    tl.from(".efeito4", {
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    tl.from(".efeito5", {
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    // aparecer os botões de escolha das comidas
    document.querySelector(".rolar").style.display = "none";
    document.querySelector(".comida").style.display = "flex";

    tl.from(".resposta", {
        y:80,
        opacity:0,
        delay:0.2,
        duration:0.2,
        onComplete:() => document.body.style.height = "97vh",
    })
}

// fechar modals
function fechar(){
    // sumir com as opções
    gsap.to(".resposta", {
        y:80,
        opacity:0,
        duration:0.5,
    });

    var modalLogin = document.querySelector("#containerLogin");
    modalLogin.style.display = "none";

    document.querySelector(".efeito3").style.display = "flex";
    document.querySelector(".efeito4").style.display = "flex";
    document.querySelector(".efeito5").style.display = "flex";
    
    let tl = gsap.timeline()

    tl.from(".efeito3", {
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    tl.from(".efeito4", {
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    tl.from(".efeito5", {
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    // aparecer os botões de escolha das comidas
    document.querySelector(".rolar").style.display = "none";
    document.querySelector(".comida").style.display = "flex";

    tl.from(".resposta", {
        y:80,
        opacity:0,
        duration:0.2,
        onComplete:() => document.body.style.height = "97vh",
    })
}

// na parte do modal do login
function verificar(){
    // sumir com as opções
    gsap.to(".resposta", {
        y:80,
        opacity:0,
        duration:0.5,
    });

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
            document.querySelector(".efeito5").style.display = "flex";
            
            let tl = gsap.timeline()
            tl.from(".efeito3", {
                y: 80,
                opacity:0, 
                duration:0.3,
            })

            tl.from(".efeito4", {
                y: 80,
                opacity:0, 
                duration:0.3,
            })

            tl.from(".efeito5", {
                y: 80,
                opacity:0, 
                duration:0.3,
            })

            document.querySelector(".rolar").style.display = "none";
            document.querySelector(".comida").style.display = "flex";

            tl.from(".resposta", {
                y:80,
                opacity:0,
                duration:0.2,
                onComplete:() => document.body.style.height = "97vh",
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
    // sumir com as opções
    gsap.to(".resposta", {
        y:80,
        opacity:0,
        duration:0.5,
    });

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
            usuario = "";
            email = "";
            senha = "";

            document.querySelector(".efeito3").style.display = "flex";
            document.querySelector(".efeito4").style.display = "flex";
            document.querySelector(".efeito5").style.display = "flex";
            

            let tl = gsap.timeline()

            tl.from(".efeito3", {
                y: 80,
                opacity:0, 
                duration:0.3,
            })

            tl.from(".efeito4", {
                y: 80,
                opacity:0, 
                duration:0.3,
            })

            tl.from(".efeito5", {
                y: 80,
                opacity:0,
                duration:0.3,
            })

            document.querySelector(".rolar").style.display = "none";
            document.querySelector(".comida").style.display = "flex";

            tl.from(".resposta", {
                y:80,
                opacity:0,
                duration:0.2,
                onComplete:() => document.body.style.height = "97vh",
            })
    }
}

//abrir cardapio
document.querySelector(".cardapio").addEventListener("click", function(){
    document.querySelector("#modalCardapio").style.display = "flex";
})

function sairMouse(){
    var cardapio = document.querySelector("#modalCardapio")
    cardapio.style.display = "none";
}
