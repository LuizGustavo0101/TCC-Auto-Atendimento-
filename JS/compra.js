//adicionar um evento para todos os itens de comida
function comida1(){
    // desabilitar o button
    document.querySelector(".comida1").disabled = true;

    // container para adicionar o innerHTML
    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Comida 1</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    // adicionar um espacamente entre os blocos
    resposta.style.margin = "0px 0px 10px 0px";
    

    primeira.appendChild(resposta);
}

function comida2(){
    // desabilitar o button
    document.querySelector(".comida2").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Comida 2</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);
}

function comida3(){
    // desabilitar o button
    document.querySelector(".comida3").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Comida 3</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);
}

function comida4(){
    // desabilitar o button
    document.querySelector(".comida4").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Comida 4</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);
}

function comida5(){
    // desabilitar o button
    document.querySelector(".comida5").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Comida 5</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);
}

function comida6(){
    // desabilitar o button
    document.querySelector(".comida6").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Comida 6</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);
}

function comida7(){
    // desabilitar o button
    document.querySelector(".comida7").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Comida 7</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);
}

function comida8(){
    // desabilitar o button
    document.querySelector(".comida8").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Comida 8</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);
}

function comida9(){
    // desabilitar o button
    document.querySelector(".comida9").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Comida 9</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);
}

function comida10(){
    // desabilitar o button
    document.querySelector(".comida10").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Comida 10</p>
        </div>

        <img src="./imagens/foto/Anonimos.png" class="fotoCliente" width="8%">
    `;

    resposta.style.margin = "0px 0px 10px 0px";
    
    primeira.appendChild(resposta);
}

function finalizarCompra(){
    // sumir com as opções
    gsap.to(".resposta", {
        y:80,
        opacity:0,
        delay:0.6,
        duration:0.5,
    })
}