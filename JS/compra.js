//adicionar um evento para todos os itens de comida
function comida1(valor){
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

    // adicionar numero ao botão de pedidos de pedidos
    // pegar o local que vai mostrar o resultado
    var resultado = document.querySelector(".contagemPedido");

    // fazer ele aparecer
    resultado.style.display = "flex";

    // vai pegar o valor do span para ver qual é o valor atual (transformando em uma Int)
    var numeroAtual = parseInt(resultado.innerHTML);

    // mudar o numero adicionando + 1 pelo onclick no HTML (onclick="function(1))
    var novoNumero = numeroAtual + valor;

    // mostrar o resultado na tela no local
    resultado.innerHTML = novoNumero;
}

function comida2(valor){
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

    // adicionar numero ao botão de pedidos de pedidos
    // pegar o local que vai mostrar o resultado
    var resultado = document.querySelector(".contagemPedido");

    // fazer ele aparecer
    resultado.style.display = "flex";

    // vai pegar o valor do span para ver qual é o valor atual (transformando em uma Int)
    var numeroAtual = parseInt(resultado.innerHTML);

    // mudar o numero adicionando + 1 pelo onclick no HTML (onclick="function(1))
    var novoNumero = numeroAtual + valor;

    // mostrar o resultado na tela no local
    resultado.innerHTML = novoNumero;
}

function comida3(valor){
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

    // adicionar numero ao botão de pedidos de pedidos
    // pegar o local que vai mostrar o resultado
    var resultado = document.querySelector(".contagemPedido");

    // fazer ele aparecer
    resultado.style.display = "flex";

    // vai pegar o valor do span para ver qual é o valor atual (transformando em uma Int)
    var numeroAtual = parseInt(resultado.innerHTML);

    // mudar o numero adicionando + 1 pelo onclick no HTML (onclick="function(1))
    var novoNumero = numeroAtual + valor;

    // mostrar o resultado na tela no local
    resultado.innerHTML = novoNumero;
}

function comida4(valor){
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

    // adicionar numero ao botão de pedidos de pedidos
    // pegar o local que vai mostrar o resultado
    var resultado = document.querySelector(".contagemPedido");

    // fazer ele aparecer
    resultado.style.display = "flex";

    // vai pegar o valor do span para ver qual é o valor atual (transformando em uma Int)
    var numeroAtual = parseInt(resultado.innerHTML);

    // mudar o numero adicionando + 1 pelo onclick no HTML (onclick="function(1))
    var novoNumero = numeroAtual + valor;

    // mostrar o resultado na tela no local
    resultado.innerHTML = novoNumero;
}

function comida5(valor){
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

    // adicionar numero ao botão de pedidos de pedidos
    // pegar o local que vai mostrar o resultado
    var resultado = document.querySelector(".contagemPedido");

    // fazer ele aparecer
    resultado.style.display = "flex";

    // vai pegar o valor do span para ver qual é o valor atual (transformando em uma Int)
    var numeroAtual = parseInt(resultado.innerHTML);

    // mudar o numero adicionando + 1 pelo onclick no HTML (onclick="function(1))
    var novoNumero = numeroAtual + valor;

    // mostrar o resultado na tela no local
    resultado.innerHTML = novoNumero;
}

function comida6(valor){
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

    // adicionar numero ao botão de pedidos de pedidos
    // pegar o local que vai mostrar o resultado
    var resultado = document.querySelector(".contagemPedido");

    // fazer ele aparecer
    resultado.style.display = "flex";

    // vai pegar o valor do span para ver qual é o valor atual (transformando em uma Int)
    var numeroAtual = parseInt(resultado.innerHTML);

    // mudar o numero adicionando + 1 pelo onclick no HTML (onclick="function(1))
    var novoNumero = numeroAtual + valor;

    // mostrar o resultado na tela no local
    resultado.innerHTML = novoNumero;
}

function comida7(valor){
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

    // adicionar numero ao botão de pedidos de pedidos
    // pegar o local que vai mostrar o resultado
    var resultado = document.querySelector(".contagemPedido");

    // fazer ele aparecer
    resultado.style.display = "flex";

    // vai pegar o valor do span para ver qual é o valor atual (transformando em uma Int)
    var numeroAtual = parseInt(resultado.innerHTML);

    // mudar o numero adicionando + 1 pelo onclick no HTML (onclick="function(1))
    var novoNumero = numeroAtual + valor;

    // mostrar o resultado na tela no local
    resultado.innerHTML = novoNumero;
}

function comida8(valor){
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

    // adicionar numero ao botão de pedidos de pedidos
    // pegar o local que vai mostrar o resultado
    var resultado = document.querySelector(".contagemPedido");

    // fazer ele aparecer
    resultado.style.display = "flex";

    // vai pegar o valor do span para ver qual é o valor atual (transformando em uma Int)
    var numeroAtual = parseInt(resultado.innerHTML);

    // mudar o numero adicionando + 1 pelo onclick no HTML (onclick="function(1))
    var novoNumero = numeroAtual + valor;

    // mostrar o resultado na tela no local
    resultado.innerHTML = novoNumero;
}

function comida9(valor){
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

    // adicionar numero ao botão de pedidos de pedidos
    // pegar o local que vai mostrar o resultado
    var resultado = document.querySelector(".contagemPedido");

    // fazer ele aparecer
    resultado.style.display = "flex";

    // vai pegar o valor do span para ver qual é o valor atual (transformando em uma Int)
    var numeroAtual = parseInt(resultado.innerHTML);

    // mudar o numero adicionando + 1 pelo onclick no HTML (onclick="function(1))
    var novoNumero = numeroAtual + valor;

    // mostrar o resultado na tela no local
    resultado.innerHTML = novoNumero;
}

function comida10(valor){
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

    // adicionar numero ao botão de pedidos de pedidos
    // pegar o local que vai mostrar o resultado
    var resultado = document.querySelector(".contagemPedido");

    // fazer ele aparecer
    resultado.style.display = "flex";

    // vai pegar o valor do span para ver qual é o valor atual (transformando em uma Int)
    var numeroAtual = parseInt(resultado.innerHTML);

    // mudar o numero adicionando + 1 pelo onclick no HTML (onclick="function(1))
    var novoNumero = numeroAtual + valor;

    // mostrar o resultado na tela no local
    resultado.innerHTML = novoNumero;
}
