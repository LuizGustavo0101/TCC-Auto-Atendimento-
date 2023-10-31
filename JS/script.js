// configuração do site
function sim(){
    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Sim</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    document.body.appendChild(resposta);

    // sumir com as opções
    gsap.to(".resposta", {
        y:80,
        opacity:0,
        delay:0.3,
        duration:0.5,
    })

    setTimeout(function() {
        var loginModal = document.querySelector("#containerLogin");
        loginModal.style.display = "flex";
    }, 500);
}

function nao(){
    var resposta = document.createElement("div");
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Não</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `
    resposta.style.margin = "0px 0px 10px 0px";
    
    document.body.appendChild(resposta);

    // sumir com as opções
    gsap.to(".resposta", {
        y:80,
        opacity:0,
        delay:1,
        duration:0.5,
    })
}

function fechar(){
    var loginModal = document.querySelector("#containerLogin");
    loginModal.style.display = "none";
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
    }
}



