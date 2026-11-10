document.addEventListener("DOMContentLoaded", async () => {

    const parametros = new URLSearchParams(window.location.search);
    const modo = parametros.get("modo");
    const titulo = document.querySelector(".titulo");
    const tabela = document.querySelector("table")
    if (modo === "pais") {
        titulo.textContent = `Ranking dos melhores jogadores no modo de mapa`
    }
    if (modo === "bandeira") {
        titulo.textContent = `Ranking dos melhores jogadores no modo de bandeira`
    }
    if (modo === "capital") {
        titulo.textContent = `Ranking dos melhores jogadores no modo de capital`
    }
    if (modo === "rico") {
        titulo.textContent = `Ranking dos melhores jogadores no modo Pib`
    }
    if (modo === "maior") {
        titulo.textContent = `Ranking dos melhores jogadores no modo de área territorial`
    }
    if (modo === "vizinhos") {
        titulo.textContent = `Ranking dos melhores jogadores no modo de vizinhos`
    }
    if (modo === "continente") {
        titulo.textContent = `Ranking dos melhores jogadores no modo de continente`
    }
    if (modo === "populacao") {
        titulo.textContent = `Ranking dos melhores jogadores no modo de população`
    }
    async function carregarRanking(modo) {
        const response = await fetch(`/lista?modo=${modo}`);

        const ranking = await response.json();

        console.log(ranking);

        return ranking;
    }
    const ranking = await carregarRanking(modo);
    for (let i = 0; i < ranking.length; i++) {
        tabela.innerHTML += `<tr>
        <td>${i + 1}º</td>
        <td>${ranking[i].username}</td>
        <td>${ranking[i].media.toFixed(0)}%</td>
        <td>${ranking[i].maior.toFixed(0)}%</td>
        </tr>`
    }
})