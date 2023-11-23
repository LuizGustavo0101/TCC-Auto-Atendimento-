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

    // Abrir o modal da tela de login
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
    })

    gsap.to(".botaoSubir", {
        x:55,
        delay:2,
        duration:0.3,
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
    })

    tl.to(".botaoSubir", {
        x:55,
        delay:0.2,
        duration:0.3,
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

            tl.to(".botaoSubir", {
                x:55,
                delay:0.2,
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

            tl.to(".botaoSubir", {
                x:55,
                delay:0.2,
                duration:0.3,
            })
    }
}

// abrir esqueceu senha
function esqueceuSenha(){
    document.querySelector(".login").style.display = "none";
    document.querySelector(".esqueceuSenha").style.display = "flex";
}

// mandar o email
function mandarEmail(){
    var email = document.querySelector("#esqueceuSenhaEmail").value;

    switch(true){
        case(email != ""):
            document.querySelector(".frente").style.display = "none"
            document.querySelector(".verso").style.display = "flex"
        break

        default:
            alert("Preencha o campo de email")
    } 
}

//abrir cardapio
document.querySelector(".cardapio").addEventListener("click", function(){
    document.querySelector("#modalCardapio").style.display = "flex";

    document.querySelector(".resposta").style.display = "none"
    document.querySelector(".botaoSubir").style.display = "none"
})

function sairMouse(){
    var cardapio = document.querySelector("#modalCardapio")
    cardapio.style.display = "none";

    setTimeout(function(){
        document.querySelector(".resposta").style.display = "flex"
        document.querySelector(".botaoSubir").style.display = "flex"
    }, 50)
}

function subir(){
    var pedido = document.querySelector(".pedidos");
    pedido.style.display = "flex";

    gsap.from(".pedidos",{
        y:900,
        duration:1,
    })
}

function descer(){
    document.querySelector(".pedidos").style.display = "none"
}

function exibir(){
    document.querySelector("#chatbot").scroll(0, 200);
}

// Parte de finalizar o pedido do cliente
function finalizarPedido(){
    // se o dinheiro/preço/valor for maior que 0, continuar normalmente
    var dinheiro = document.querySelector(".valorFinal").innerHTML;
    
    if(dinheiro > 0 ){
        // fechar a area de pedidos e os botões das comidas
        document.querySelector(".compra").style.display = "none"
        document.querySelector(".comida").style.display = "none"

        // estilizar o tamanho da area de respostar para o pagamento
        var tl = gsap.timeline();

        document.querySelector(".efeito6").style.display = "flex";
        tl.from(".efeito6",{
            delay:0.5,
            y: 80,
            opacity:0, 
            duration:0.3,
        })

        document.querySelector(".resposta").style.height = "15vh";
        document.querySelector(".pagamento").style.display = "flex";
        tl.from(".resposta",{
            y:150,
        })
    }else{
        alert("Não podemos finalizar a compra sem ter pedido nada!")
    }

}

// formas de pagamentos
function credito(){
    // container para adicionar o innerHTML
    var quarta = document.querySelector(".quartaParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Crédito</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    // adicionar um espacamente entre os blocos
    resposta.style.margin = "0px 0px 10px 0px";

    quarta.appendChild(resposta);

    alert("Pagamento Efetuado")
    alert("Não aprendemos a fazer uma API nem a integrar com o site então essa parte ficará sem funcionar")   
}

function debito(){
    // container para adicionar o innerHTML
    var quarta = document.querySelector(".quartaParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Débito</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    // adicionar um espacamente entre os blocos
    resposta.style.margin = "0px 0px 10px 0px";

    quarta.appendChild(resposta);

    alert("Pagamento Efetuado")
    alert("Não aprendemos a fazer uma API nem a integrar com o site então essa parte ficará sem funcionar")
}

function pix(){
    // container para adicionar o innerHTML
    var quarta = document.querySelector(".quartaParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Pix</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    // adicionar um espacamente entre os blocos
    resposta.style.margin = "0px 0px 10px 0px";

    quarta.appendChild(resposta);

    var tl = gsap.timeline()

    document.querySelector(".efeito7").style.display = "flex"
    tl.from(".efeito7",{
        delay:0.5,
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    // sumir com as opções
    tl.to(".resposta", {
        y:80,
        opacity:0,
        delay:0.6,
        duration:0.5,
        onComplete: () => document.querySelector(".pagamento").style.display = "none"
    })

    document.querySelector(".metodoPagamento").style.display = "flex"
    tl.from(".resposta", {
        y:80,
        opacity:0,
        delay:0.2,
        duration:0.2,
    })

}

function QRCode(){
    // container para adicionar o innerHTML
    var quinta = document.querySelector(".quintaParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Pix QR Code</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    // adicionar um espacamente entre os blocos
    resposta.style.margin = "0px 0px 10px 0px";

    quinta.appendChild(resposta);

    var tl = gsap.timeline()

    document.querySelector(".efeito8").style.display = "flex"
    document.querySelector(".efeito11").style.display = "flex"
    tl.from(".efeito8",{
        delay:0.5,
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    tl.from(".efeito11",{
        delay:0.5,
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    tl.to(".resposta", {
        y:80,
        opacity:0,
        delay:0.6,
        duration:0.5,
    })

    var elemento = document.querySelector(".progressoBarra");
    var width = 1;
    
    setTimeout(()=>{
        const intervalo = setInterval(() =>{
            width += 1;
            elemento.style.width = width + '%'; 

            if(width >= 100){
                clearInterval(intervalo);

                var ultimaParte = document.querySelector(".ultimaParte");
                ultimaParte.style.display = "flex";
            
                gsap.from(".ultimaParte",{
                    delay:1,
                    y:1000,
                    duration:1,
                })
            }
        }, 60);
    }, 3000)
}

function copiaCola(){
    // container para adicionar o innerHTML
    var quinta = document.querySelector(".quintaParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Pix Copia e Cola</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    // adicionar um espacamente entre os blocos
    resposta.style.margin = "0px 0px 10px 0px";

    quinta.appendChild(resposta);

    var tl = gsap.timeline()

    document.querySelector(".efeito9").style.display = "flex"
    document.querySelector(".efeito10").style.display = "flex"
    document.querySelector(".efeito11").style.display = "flex"
    tl.from(".efeito9",{
        delay:0.5,
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    tl.from(".efeito10",{
        delay:0.5,
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    tl.from(".efeito11",{
        delay:0.5,
        y: 80,
        opacity:0, 
        duration:0.3,
    })

    tl.to(".resposta", {
        y:80,
        opacity:0,
        delay:0.6,
        duration:0.5,
    })  

    var elemento = document.querySelector(".progressoBarra");
    var width = 1;
    
    setTimeout(()=>{
        const intervalo = setInterval(() =>{
            width += 1;
            elemento.style.width = width + '%'; 

            if(width >= 100){
                clearInterval(intervalo);

                var ultimaParte = document.querySelector(".ultimaParte");
                ultimaParte.style.display = "flex";
            
                gsap.from(".ultimaParte",{
                    delay:1,
                    y:1000,
                    duration:1,
                })
            }
        }, 60);
    }, 3000)
}

function copiar(){
    var codigoCopiar = document.querySelector(".copiar");
    navigator.clipboard.writeText(codigoCopiar.innerHTML);

    alert("Código copiado para a área de transferência!!");
}