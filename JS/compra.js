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

   // adicionar a pagina de pedidos
   var containerPedido = document.querySelector(".itens");
   var pedido = document.createElement('div')
   pedido.className = "item";
   pedido.innerHTML = `
        <div class="parteProduto">                                 
            <div class="imagemComida"><div></div></div>

            <div class="escrita">
                <h3>Salada do chefe</h3>
                <p>
                    Salda de alface temperada com sal pimenta do
                    reina 
                    
                    <span class="parteAberta">e limão com tomate, cebola roxa, alecrim e pepino</span>

                    <br>
                    
                    <a href="#" onclick="verMais()" onmouseleave="verMenos()">... <span class="readMore">Ver mais</span></a>
                </p>
            </div>

            <div class="preco">
                <div class="valor">
                    <span class="containerQuantidade">(<p class="quantidade">1</p>)</span> 
                    <span>R$<span class="valorPadrao">31</span></span>
                </div>

                <div class="acrescentar">
                    <button onclick="acrescentar(1)" class="maisButton">+</button>
                    <button onclick="remover(1)" class="menosButton">-</button>
                </div>    
            </div>                         
        </div>  
   `
   pedido.style.marginTop = "30px";
   pedido.style.marginBottom = "30px";

   containerPedido.appendChild(pedido);
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

    // adicionar a pagina de pedidos
    var containerPedido = document.querySelector(".itens");
    var pedido = document.createElement('div')
    pedido.className = "item";
    pedido.innerHTML = `
        <div class="parteProduto">                                 
            <div class="imagemComida"><div></div></div>

            <div class="escrita">
                <h3>Salada do chefe</h3>
                <p>
                    Salda de alface temperada com sal pimenta do
                    reina 
                    
                    <span class="parteAberta">e limão com tomate, cebola roxa, alecrim e pepino</span>

                    <br>
                    
                    <a href="#" onclick="verMais()" onmouseleave="verMenos()">... <span class="readMore">Ver mais</span></a>
                </p>
            </div>

            <div class="preco">
                <div class="valor">
                    <span class="containerQuantidade">(<p class="quantidade">1</p>)</span> 
                    <span>R$<span class="valorPadrao">31</span></span>
                </div>

                <div class="acrescentar">
                    <button onclick="acrescentar(1)" class="maisButton">+</button>
                    <button onclick="remover(1)" class="menosButton">-</button>
                </div>    
            </div>                         
        </div>      
       </div>    
    `
    pedido.style.marginBottom = "30px";

    containerPedido.appendChild(pedido);

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

    // adicionar a pagina de pedidos
    var containerPedido = document.querySelector(".itens");
    var pedido = document.createElement('div')
    pedido.className = "item";
    pedido.innerHTML = `
        <div class="parteProduto">                                 
            <div class="imagemComida"><div></div></div>

            <div class="escrita">
                <h3>Salada do chefe</h3>
                <p>
                    Salda de alface temperada com sal pimenta do
                    reina 
                    
                    <span class="parteAberta">e limão com tomate, cebola roxa, alecrim e pepino</span>

                    <br>
                    
                    <a href="#" onclick="verMais()" onmouseleave="verMenos()">... <span class="readMore">Ver mais</span></a>
                </p>
            </div>

            <div class="preco">
                <div class="valor">
                    <span class="containerQuantidade">(<p class="quantidade">1</p>)</span> 
                    <span>R$<span class="valorPadrao">31</span></span>
                </div>

                <div class="acrescentar">
                    <button onclick="acrescentar(1)" class="maisButton">+</button>
                    <button onclick="remover(1)" class="menosButton">-</button>
                </div>    
            </div>                         
        </div>      
    `
    pedido.style.marginBottom = "30px";

    containerPedido.appendChild(pedido);

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

    // adicionar a pagina de pedidos
    var containerPedido = document.querySelector(".itens");
    var pedido = document.createElement('div')
    pedido.className = "item";
    pedido.innerHTML = `
        <div class="parteProduto">                                 
            <div class="imagemComida"><div></div></div>

            <div class="escrita">
                <h3>Salada do chefe</h3>
                <p>
                    Salda de alface temperada com sal pimenta do
                    reina 
                    
                    <span class="parteAberta">e limão com tomate, cebola roxa, alecrim e pepino</span>

                    <br>
                    
                    <a href="#" onclick="verMais()" onmouseleave="verMenos()">... <span class="readMore">Ver mais</span></a>
                </p>
            </div>

            <div class="preco">
                <div class="valor">
                    <span class="containerQuantidade">(<p class="quantidade">1</p>)</span> 
                    <span>R$<span class="valorPadrao">31</span></span>
                </div>

                <div class="acrescentar">
                    <button onclick="acrescentar(1)" class="maisButton">+</button>
                    <button onclick="remover(1)" class="menosButton">-</button>
                </div>    
            </div>                         
        </div>      
    `
    pedido.style.marginBottom = "30px";

    containerPedido.appendChild(pedido);

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

    // adicionar a pagina de pedidos
    var containerPedido = document.querySelector(".itens");
    var pedido = document.createElement('div')
    pedido.className = "item";
    pedido.innerHTML = `
        <div class="parteProduto">                                 
            <div class="imagemComida"><div></div></div>

            <div class="escrita">
                <h3>Salada do chefe</h3>
                <p>
                    Salda de alface temperada com sal pimenta do
                    reina 
                    
                    <span class="parteAberta">e limão com tomate, cebola roxa, alecrim e pepino</span>

                    <br>
                    
                    <a href="#" onclick="verMais()" onmouseleave="verMenos()">... <span class="readMore">Ver mais</span></a>
                </p>
            </div>

            <div class="preco">
                <div class="valor">
                    <span class="containerQuantidade">(<p class="quantidade">1</p>)</span> 
                    <span>R$<span class="valorPadrao">31</span></span>
                </div>

                <div class="acrescentar">
                    <button onclick="acrescentar(1)" class="maisButton">+</button>
                    <button onclick="remover(1)" class="menosButton">-</button>
                </div>    
            </div>                         
        </div>      
    `
    pedido.style.marginBottom = "30px";

    containerPedido.appendChild(pedido);

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

    // adicionar a pagina de pedidos
    var containerPedido = document.querySelector(".itens");
    var pedido = document.createElement('div')
    pedido.className = "item";
    pedido.innerHTML = `
        <div class="parteProduto">                                 
            <div class="imagemComida"><div></div></div>

            <div class="escrita">
                <h3>Salada do chefe</h3>
                <p>
                    Salda de alface temperada com sal pimenta do
                    reina 
                    
                    <span class="parteAberta">e limão com tomate, cebola roxa, alecrim e pepino</span>

                    <br>
                    
                    <a href="#" onclick="verMais()" onmouseleave="verMenos()">... <span class="readMore">Ver mais</span></a>
                </p>
            </div>

            <div class="preco">
                <div class="valor">
                    <span class="containerQuantidade">(<p class="quantidade">1</p>)</span> 
                    <span>R$<span class="valorPadrao">31</span></span>
                </div>

                <div class="acrescentar">
                    <button onclick="acrescentar(1)" class="maisButton">+</button>
                    <button onclick="remover(1)" class="menosButton">-</button>
                </div>    
            </div>                         
        </div>      
    `
    pedido.style.marginBottom = "30px";

    containerPedido.appendChild(pedido);

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

    // adicionar a pagina de pedidos
    var containerPedido = document.querySelector(".itens");
    var pedido = document.createElement('div')
    pedido.className = "item";
    pedido.innerHTML = `
        <div class="parteProduto">                                 
            <div class="imagemComida"><div></div></div>

            <div class="escrita">
                <h3>Salada do chefe</h3>
                <p>
                    Salda de alface temperada com sal pimenta do
                    reina 
                    
                    <span class="parteAberta">e limão com tomate, cebola roxa, alecrim e pepino</span>

                    <br>
                    
                    <a href="#" onclick="verMais()" onmouseleave="verMenos()">... <span class="readMore">Ver mais</span></a>
                </p>
            </div>

            <div class="preco">
                <div class="valor">
                    <span class="containerQuantidade">(<p class="quantidade">1</p>)</span> 
                    <span>R$<span class="valorPadrao">31</span></span>
                </div>

                <div class="acrescentar">
                    <button onclick="acrescentar(1)" class="maisButton">+</button>
                    <button onclick="remover(1)" class="menosButton">-</button>
                </div>    
            </div>                         
        </div>      
    `
    pedido.style.marginBottom = "30px";

    containerPedido.appendChild(pedido);

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

    // adicionar a pagina de pedidos
    var containerPedido = document.querySelector(".itens");
    var pedido = document.createElement('div')
    pedido.className = "item";
    pedido.innerHTML = `
        <div class="parteProduto">                                 
            <div class="imagemComida"><div></div></div>

            <div class="escrita">
                <h3>Salada do chefe</h3>
                <p>
                    Salda de alface temperada com sal pimenta do
                    reina 
                    
                    <span class="parteAberta">e limão com tomate, cebola roxa, alecrim e pepino</span>

                    <br>
                    
                    <a href="#" onclick="verMais()" onmouseleave="verMenos()">... <span class="readMore">Ver mais</span></a>
                </p>
            </div>

            <div class="preco">
                <div class="valor">
                    <span class="containerQuantidade">(<p class="quantidade">1</p>)</span> 
                    <span>R$<span class="valorPadrao">31</span></span>
                </div>

                <div class="acrescentar">
                    <button onclick="acrescentar(1)" class="maisButton">+</button>
                    <button onclick="remover(1)" class="menosButton">-</button>
                </div>    
            </div>                         
        </div>      
    `
    pedido.style.marginBottom = "30px";

    containerPedido.appendChild(pedido);

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

    // adicionar a pagina de pedidos
    var containerPedido = document.querySelector(".itens");
    var pedido = document.createElement('div')
    pedido.className = "item";
    pedido.innerHTML = `
        <div class="parteProduto">                                 
            <div class="imagemComida"><div></div></div>

            <div class="escrita">
                <h3>Salada do chefe</h3>
                <p>
                    Salda de alface temperada com sal pimenta do
                    reina 
                    
                    <span class="parteAberta">e limão com tomate, cebola roxa, alecrim e pepino</span>

                    <br>
                    
                    <a href="#" onclick="verMais()" onmouseleave="verMenos()">... <span class="readMore">Ver mais</span></a>
                </p>
            </div>

            <div class="preco">
                <div class="valor">
                    <span class="containerQuantidade">(<p class="quantidade">1</p>)</span> 
                    <span>R$<span class="valorPadrao">31</span></span>
                </div>

                <div class="acrescentar">
                    <button onclick="acrescentar(1)" class="maisButton">+</button>
                    <button onclick="remover(1)" class="menosButton">-</button>
                </div>    
            </div>                         
        </div>      
    `
    pedido.style.marginBottom = "30px";

    containerPedido.appendChild(pedido);

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

    // adicionar a pagina de pedidos
    var containerPedido = document.querySelector(".itens");
    var pedido = document.createElement('div')
    pedido.className = "item";
    pedido.innerHTML = `
        <div class="parteProduto">                                 
            <div class="imagemComida"><div></div></div>

            <div class="escrita">
                <h3>Salada do chefe</h3>
                <p>
                    Salda de alface temperada com sal pimenta do
                    reina 
                    
                    <span class="parteAberta">e limão com tomate, cebola roxa, alecrim e pepino</span>

                    <br>
                    
                    <a href="#" onclick="verMais()" onmouseleave="verMenos()">... <span class="readMore">Ver mais</span></a>
                </p>
            </div>

            <div class="preco">
                <div class="valor">
                    <span class="containerQuantidade">(<p class="quantidade">1</p>)</span> 
                    <span>R$<span class="valorPadrao">31</span></span>
                </div>

                <div class="acrescentar">
                    <button onclick="acrescentar(1)" class="maisButton">+</button>
                    <button onclick="remover(1)" class="menosButton">-</button>
                </div>    
            </div>                         
        </div>      
    `
    pedido.style.marginBottom = "30px";

    containerPedido.appendChild(pedido);
}

// botão do Read More
function verMais(){
    document.querySelector(".parteAberta").style.display = "flex";

    document.querySelector(".readMore").innerHTML = `Ver menos`;
}

function verMenos(){
    document.querySelector(".parteAberta").style.display = "none";
    document.querySelector(".readMore").innerHTML = `Ver mais`;
}

// acrescentar
function acrescentar(valor){
    document.querySelector(".containerQuantidade").style.display = "flex";

    var quantidadeComida = document.querySelector(".quantidade");
    var n1 = parseInt(quantidadeComida.innerHTML);
    var novo = n1 + valor;
    quantidadeComida.innerHTML = novo;
}

function remover(valor){
    var quantidadeComida = document.querySelector(".quantidade").innerText;
    quantidadeComida = parseInt(quantidadeComida);

    if(quantidadeComida == 1){
        alert("Vamos excluir esse item do seu pedido");

        document.querySelector(".item").style.display = "none";
    }else{
        var quantidadeComida = document.querySelector(".quantidade");
        var n1 = parseInt(quantidadeComida.innerHTML);
        var novo = n1 - valor;
        quantidadeComida.innerHTML = novo;
    }
}