//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    //Captura o valor do campo de entrada
    let entrada = document.getElementById("amigo");
    let nome = input.value.trim();

    //validação da entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

     // Atualiza o array de amigos
     amigos.push(nome);

     // Limpa o campo de entrada
    input.value = "";

    //atualiza a lista de amigos
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
     // Obtém o elemento da lista no HTML
    let lista = document.getElementById("listaAmigos");
    
     // Limpa a lista antes de atualizar para evitar duplicatas
    lista.innerHTML = "";

     // Percorre o array de amigos e adiciona cada nome como um item na lista
    amigos.forEach(amigo => {
        let li = document.createElement("li"); // Cria um novo elemento de lista
        li.textContent = amigo; // Define o texto do item da lista como o nome do amigo
        lista.appendChild(li); // Adiciona o item à lista no HTML
    });
}
