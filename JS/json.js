let divComida = document.querySelector(".comida");

fetch("./JSON/data.json").then((response) => {
    response.json().then((dados) => {
        dados.comida.map((comida) =>{
            divComida.innerHTML += `
                <button class="button ${comida.classe}">${comida.nome}</button>
            `
        })
    })
})