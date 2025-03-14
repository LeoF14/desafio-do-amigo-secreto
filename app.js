//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let valorAmigo = document.getElementById('amigo');
    let nomeAmigo = valorAmigo.value;

    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        valorAmigo.value = "";
        valorAmigo.focus();
    } else {
        alert('Preencha um nome!');
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista está vazia! Adicione amigos para sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    amigos.splice(indiceSorteado, 1);

    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
    );
}