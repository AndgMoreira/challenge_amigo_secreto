const listaDeAmigos = [];

function adicionarAmigo() {
    const nome = document.querySelector("input").value;

    if (nome === "") {
        alert("Informe um nome.");
    } else {
        listaDeAmigos.push(nome);
        document.querySelector("input").value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaDeAmigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length > 0) {
        const listResultado = document.getElementById("resultado");
        listResultado.innerHTML = "";
        const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
        const amigoSorteado = listaDeAmigos[indiceSorteado];
        const liElementSort = document.createElement("li");
        liElementSort.textContent = "Seu amigo secreto é: " + amigoSorteado;
        listResultado.appendChild(liElementSort);
    } else {
       alert("Adicione primeiro seus amigos para sortear um nome");
    }
}