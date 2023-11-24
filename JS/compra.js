function comida1(valor){
    // desabilitar o button
    document.querySelector(".comida1").disabled = true;

    // container para adicionar o innerHTML
    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Salada do Chefe</p>
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

    // adicionar a lista de pedidos
    document.querySelector(".pedido1").style.display = "flex";

    // mostrar o valor final
    var cards = document.querySelectorAll(".cardComida");

    // Inicializar o contador
    var numeroInicial = 0;

    var lista = []

    // Iterar sobre cada card
    cards.forEach(function(card) {
        // Verificar se o card está visível (display: flex ou display: block)
        var estiloDisplay = getComputedStyle(card).display;
        if (estiloDisplay === "flex" || estiloDisplay === "block") {
            numeroInicial++;    
        }
    });  

    lista.push(numeroInicial)

    var conta = lista.length * 31;

    var precoTotal = document.querySelector(".valorFinal");
    var precoFinal = parseInt(precoTotal.innerHTML) + conta;
    precoTotal.innerHTML = precoFinal;
}

function comida2(valor){
    // desabilitar o button
    document.querySelector(".comida2").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Macarronada a Carbonara</p>
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

    // adicionar a lista de pedidos
    document.querySelector(".pedido2").style.display = "flex";

    // mostrar o valor final
    var cards = document.querySelectorAll(".cardComida");

    // Inicializar o contador
    var numeroInicial = 0;

    var lista = []

    // Iterar sobre cada card
    cards.forEach(function(card) {
        // Verificar se o card está visível (display: flex ou display: block)
        var estiloDisplay = getComputedStyle(card).display;
        if (estiloDisplay === "flex" || estiloDisplay === "block") {
            numeroInicial++;    
        }
    });  

    lista.push(numeroInicial)

    // calcular o valor final
    var conta = lista.length * 31;

    var precoTotal = document.querySelector(".valorFinal");
    var precoFinal = parseInt(precoTotal.innerHTML) + conta;
    precoTotal.innerHTML = precoFinal;
}

function comida3(valor){
    // desabilitar o button
    document.querySelector(".comida3").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Prato baiano com frutas</p>
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

    // adicionar a lista de pedidos
    document.querySelector(".pedido3").style.display = "flex";

    // mostrar o valor final
    var cards = document.querySelectorAll(".cardComida");

    // Inicializar o contador
    var numeroInicial = 0;

    var lista = []

    // Iterar sobre cada card
    cards.forEach(function(card) {
        // Verificar se o card está visível (display: flex ou display: block)
        var estiloDisplay = getComputedStyle(card).display;
        if (estiloDisplay === "flex" || estiloDisplay === "block") {
            numeroInicial++;    
        }
    });  

    lista.push(numeroInicial)

    // calcular o valor final
    var conta = lista.length * 31;

    var precoTotal = document.querySelector(".valorFinal");
    var precoFinal = parseInt(precoTotal.innerHTML) + conta;
    precoTotal.innerHTML = precoFinal;
}

function comida4(valor){
    // desabilitar o button
    document.querySelector(".comida4").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Prato feito de carne</p>
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

    // adicionar a lista de pedidos
    document.querySelector(".pedido4").style.display = "flex";

    // mostrar o valor final
    var cards = document.querySelectorAll(".cardComida");

    // Inicializar o contador
    var numeroInicial = 0;

    var lista = []

    // Iterar sobre cada card
    cards.forEach(function(card) {
        // Verificar se o card está visível (display: flex ou display: block)
        var estiloDisplay = getComputedStyle(card).display;
        if (estiloDisplay === "flex" || estiloDisplay === "block") {
            numeroInicial++;    
        }
    });  

    lista.push(numeroInicial)

    // calcular o valor final
    var conta = lista.length * 31;

    var precoTotal = document.querySelector(".valorFinal");
    var precoFinal = parseInt(precoTotal.innerHTML) + conta;
    precoTotal.innerHTML = precoFinal;
}

function comida5(valor){
    // desabilitar o button
    document.querySelector(".comida5").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Ensopado e goulash</p>
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

    // adicionar a lista de pedidos
    document.querySelector(".pedido5").style.display = "flex";

    // mostrar o valor final
    var cards = document.querySelectorAll(".cardComida");

    // Inicializar o contador
    var numeroInicial = 0;

    var lista = []

    // Iterar sobre cada card
    cards.forEach(function(card) {
        // Verificar se o card está visível (display: flex ou display: block)
        var estiloDisplay = getComputedStyle(card).display;
        if (estiloDisplay === "flex" || estiloDisplay === "block") {
            numeroInicial++;    
        }
    });  

    lista.push(numeroInicial)

    // calcular o valor final
    var conta = lista.length * 31;

    var precoTotal = document.querySelector(".valorFinal");
    var precoFinal = parseInt(precoTotal.innerHTML) + conta;
    precoTotal.innerHTML = precoFinal;
}

function comida6(valor){
    // desabilitar o button
    document.querySelector(".comida6").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Salada Maromba</p>
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

    // adicionar a lista de pedidos
    document.querySelector(".pedido6").style.display = "flex";

    // mostrar o valor final
    var cards = document.querySelectorAll(".cardComida");

    // Inicializar o contador
    var numeroInicial = 0;

    var lista = []

    // Iterar sobre cada card
    cards.forEach(function(card) {
        // Verificar se o card está visível (display: flex ou display: block)
        var estiloDisplay = getComputedStyle(card).display;
        if (estiloDisplay === "flex" || estiloDisplay === "block") {
            numeroInicial++;    
        }
    });  

    lista.push(numeroInicial)

    // calcular o valor final
    var conta = lista.length * 31;

    var precoTotal = document.querySelector(".valorFinal");
    var precoFinal = parseInt(precoTotal.innerHTML) + conta;
    precoTotal.innerHTML = precoFinal;
}

function comida7(valor){
    // desabilitar o button
    document.querySelector(".comida7").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Suco de jarra</p>
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

    // adicionar a lista de pedidos
    document.querySelector(".pedido7").style.display = "flex";

    // mostrar o valor final
    var cards = document.querySelectorAll(".cardComida");

    // Inicializar o contador
    var numeroInicial = 0;

    var lista = []

    // Iterar sobre cada card
    cards.forEach(function(card) {
        // Verificar se o card está visível (display: flex ou display: block)
        var estiloDisplay = getComputedStyle(card).display;
        if (estiloDisplay === "flex" || estiloDisplay === "block") {
            numeroInicial++;    
        }
    });  

    lista.push(numeroInicial)

    // calcular o valor final
    var conta = lista.length * 31;

    var precoTotal = document.querySelector(".valorFinal");
    var precoFinal = parseInt(precoTotal.innerHTML) + conta;
    precoTotal.innerHTML = precoFinal;
}

function comida8(valor){
    // desabilitar o button
    document.querySelector(".comida8").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Hamburguer da casa</p>
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

    // adicionar a lista de pedidos
    document.querySelector(".pedido8").style.display = "flex";

    // mostrar o valor final
    var cards = document.querySelectorAll(".cardComida");

    // Inicializar o contador
    var numeroInicial = 0;

    var lista = []

    // Iterar sobre cada card
    cards.forEach(function(card) {
        // Verificar se o card está visível (display: flex ou display: block)
        var estiloDisplay = getComputedStyle(card).display;
        if (estiloDisplay === "flex" || estiloDisplay === "block") {
            numeroInicial++;    
        }
    });  

    lista.push(numeroInicial)

    // calcular o valor final
    var conta = lista.length * 31;

    var precoTotal = document.querySelector(".valorFinal");
    var precoFinal = parseInt(precoTotal.innerHTML) + conta;
    precoTotal.innerHTML = precoFinal;
}

function comida9(valor){
    // desabilitar o button
    document.querySelector(".comida9").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Lasanha do chefe</p>
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

    // adicionar a lista de pedidos
    document.querySelector(".pedido9").style.display = "flex";

    // mostrar o valor final
    var cards = document.querySelectorAll(".cardComida");

    // Inicializar o contador
    var numeroInicial = 0;

    var lista = []

    // Iterar sobre cada card
    cards.forEach(function(card) {
        // Verificar se o card está visível (display: flex ou display: block)
        var estiloDisplay = getComputedStyle(card).display;
        if (estiloDisplay === "flex" || estiloDisplay === "block") {
            numeroInicial++;    
        }
    });  

    lista.push(numeroInicial)

    // calcular o valor final
    var conta = lista.length * 31;

    var precoTotal = document.querySelector(".valorFinal");
    var precoFinal = parseInt(precoTotal.innerHTML) + conta;
    precoTotal.innerHTML = precoFinal;
}

function comida10(valor){
    // desabilitar o button
    document.querySelector(".comida10").disabled = true;

    var primeira = document.querySelector(".terceiraParte");

    var resposta = document.createElement('div');
    resposta.className = "cliente";
    resposta.innerHTML = `
        <div class="caixaMensagem">
            <p>Legumes na churrasqueira</p>
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

    // adicionar a lista de pedidos
    document.querySelector(".pedido10").style.display = "flex";

    // mostrar o valor final
    var cards = document.querySelectorAll(".cardComida");

    // Inicializar o contador
    var numeroInicial = 0;

    var lista = []

    // Iterar sobre cada card
    cards.forEach(function(card) {
        // Verificar se o card está visível (display: flex ou display: block)
        var estiloDisplay = getComputedStyle(card).display;
        if (estiloDisplay === "flex" || estiloDisplay === "block") {
            numeroInicial++;    
        }
    });  

    lista.push(numeroInicial)

    // calcular o valor final
    var conta = lista.length * 31;

    var precoTotal = document.querySelector(".valorFinal");
    var precoFinal = parseInt(precoTotal.innerHTML) + conta;
    precoTotal.innerHTML = precoFinal;
}


// Adicione um evento de clique para cada botão de "Ver mais" e "Ver menos"
var cards = document.querySelectorAll(".cardComida");

cards.forEach(function(card) {
    var lerMaisButton = card.querySelector(".lerMais");
    var lerMenosButton = card.querySelector(".lerMenos");

    lerMaisButton.addEventListener("click", function() {
        verMais(card);
    });

    lerMenosButton.addEventListener("click", function() {
        verMenos(card);
    });
});

function verMais(card){
    var maisTexto = card.querySelector(".parteFechada");
    var lerMais = card.querySelector(".lerMais");
    var lerMenos = card.querySelector(".lerMenos");

    maisTexto.style.display = "flex";
    lerMais.style.display = "none";
    lerMenos.style.display = "flex";
}

function verMenos(card){
    var maisTexto = card.querySelector(".parteFechada");
    var lerMais = card.querySelector(".lerMais");
    var lerMenos = card.querySelector(".lerMenos");

    maisTexto.style.display = "none";
    lerMais.style.display = "flex";
    lerMenos.style.display = "none";
}


// acrescentar
function acrescentar(numeroPedido){
    var card = document.querySelector(".pedido" + numeroPedido);

    var quantidade = card.querySelector(".quantidade");
    var quantidadeFinal = parseInt(quantidade.innerHTML);
    quantidade.innerHTML = quantidadeFinal + 1;

    var valorPadrao = card.querySelector(".valorPadrao");
    var valorFinal = parseInt(valorPadrao.innerHTML);
    valorPadrao.innerHTML = valorFinal + 31;

    var valorPedido = document.querySelector(".valorFinal");
    var valorNumero = parseInt(valorPedido.innerHTML);
    valorPedido.innerHTML = valorNumero + 31
}

function remover(numeroPedido){
    var card = document.querySelector(".pedido" + numeroPedido);

    var quantidadeComida = card.querySelector(".quantidade");
    quantidadeComida = parseInt(quantidadeComida.innerHTML);

    if (quantidadeComida === 1) {
        alert("Vamos excluir esse item do seu pedido");
        quantidadeComida -1;
        card.style.display = "none";  // ou faça o que for necessário para remover o card
        
        var precoTotal = document.querySelector(".valorFinal");
        var precoFinal = parseInt(precoTotal.innerHTML) - 31;
        precoTotal.innerHTML = precoFinal;

        // tirar a config do card para desvizualiçaõa na pagina principal
        // pegar o local que vai mostrar o resultado
        var resultado = document.querySelector(".contagemPedido");
        var numeroAtual = parseInt(resultado.innerHTML);

        if(numeroAtual <= 1){
            resultado.style.display = "none";
        }else{
            var novoNumero = numeroAtual - 1;
            resultado.innerHTML = novoNumero;
        }
        
    } else {
        var quantidadeComida = card.querySelector(".quantidade");
        var n1 = parseInt(quantidadeComida.innerHTML);
        var novo = n1 - 1;
        quantidadeComida.innerHTML = novo;

        var valorPadrao = card.querySelector(".valorPadrao");
        var valorCard = parseInt(valorPadrao.innerHTML);
        valorPadrao.innerHTML = valorCard - 31;

        var precoTotal = document.querySelector(".valorFinal");
        var precoFinal = parseInt(precoTotal.innerHTML) - 31;
        precoTotal.innerHTML = precoFinal;
    }
}