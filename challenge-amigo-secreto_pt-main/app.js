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
}