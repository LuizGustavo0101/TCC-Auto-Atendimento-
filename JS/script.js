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

// na parte do modal do login
var email = document.querySelector("#login").value;
var senha = document.querySelector("#senha").value;
var button = document.querySelector(".loginSite");

switch(true){
    case(email != "" && senha != ""):
        button.style.background = "rgb(26, 134, 236)";
        button.style.color = "white";
        break
}