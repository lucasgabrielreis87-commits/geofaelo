
document.addEventListener("DOMContentLoaded", () => {

    const iniciar = document.querySelectorAll(".iniciar");
    const ranking = document.querySelectorAll(".ranking")
    const configuracao = document.querySelector("#configuracao");
    const fecharConfig = document.querySelector("#fecharConfig");
    const comecar = document.querySelector("#comecar");
    const botoesRodadas = document.querySelectorAll(".rodada");

    let modoEscolhido = "";
    let rodadasEscolhidas = 10;

    iniciar.forEach(button => {
        button.addEventListener("click", () => {
            modoEscolhido = button.dataset.mode;
            configuracao.style.display = "flex";
        });
    });

    botoesRodadas.forEach(button => {
        button.addEventListener("click", () => {
            rodadasEscolhidas = Number(button.dataset.rodadas);

            botoesRodadas.forEach(botao => {
                botao.classList.remove("selecionada");
            });

            button.classList.add("selecionada");
        });
    });

    fecharConfig.addEventListener("click", () => {
        configuracao.style.display = "none";
    });

    comecar.addEventListener("click", () => {
        let pagina;

        if (
            modoEscolhido === "pais" ||
            modoEscolhido === "bandeira" ||
            modoEscolhido === "capital" ||
            modoEscolhido === "continente" ||
            modoEscolhido === "vizinhos"
        ) {
            pagina = "/jogo";
        } else {
            pagina = "/jogoComparacao";
        }

        window.location.href =
            `${pagina}?modo=${modoEscolhido}&rodadas=${rodadasEscolhidas}`;
    });

    ranking.forEach( button =>{
        button.addEventListener("click", () =>{
            modoEscolhido = button.dataset.mode;
            window.location.href = `/ranking?modo=${modoEscolhido}`
        })
    })


    const voltarButton = document.getElementById("voltar");
    voltarButton.addEventListener("click", () => {
        window.location.href = "/";
    }
    )

});