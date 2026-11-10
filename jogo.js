document.addEventListener("DOMContentLoaded", () => {
    const paises = [
        // África
        { id: "dz", iso3: "DZA", nome: "Argélia" },
        { id: "ao", iso3: "AGO", nome: "Angola" },
        { id: "bj", iso3: "BEN", nome: "Benim" },
        { id: "bw", iso3: "BWA", nome: "Botsuana" },
        { id: "bf", iso3: "BFA", nome: "Burkina Faso" },
        { id: "bi", iso3: "BDI", nome: "Burundi" },
        { id: "cv", iso3: "CPV", nome: "Cabo Verde" },
        { id: "cm", iso3: "CMR", nome: "Camarões" },
        { id: "td", iso3: "TCD", nome: "Chade" },
        { id: "km", iso3: "COM", nome: "Comores" },
        { id: "cg", iso3: "COG", nome: "Congo" },
        { id: "cd", iso3: "COD", nome: "República Democrática do Congo" },
        { id: "ci", iso3: "CIV", nome: "Costa do Marfim" },
        { id: "dj", iso3: "DJI", nome: "Djibuti" },
        { id: "eg", iso3: "EGY", nome: "Egito" },
        { id: "er", iso3: "ERI", nome: "Eritreia" },
        { id: "sz", iso3: "SWZ", nome: "Essuatíni" },
        { id: "et", iso3: "ETH", nome: "Etiópia" },
        { id: "ga", iso3: "GAB", nome: "Gabão" },
        { id: "gm", iso3: "GMB", nome: "Gâmbia" },
        { id: "gh", iso3: "GHA", nome: "Gana" },
        { id: "gn", iso3: "GIN", nome: "Guiné" },
        { id: "gw", iso3: "GNB", nome: "Guiné-Bissau" },
        { id: "gq", iso3: "GNQ", nome: "Guiné Equatorial" },
        { id: "ke", iso3: "KEN", nome: "Quênia" },
        { id: "ls", iso3: "LSO", nome: "Lesoto" },
        { id: "lr", iso3: "LBR", nome: "Libéria" },
        { id: "ly", iso3: "LBY", nome: "Líbia" },
        { id: "mg", iso3: "MDG", nome: "Madagascar" },
        { id: "mw", iso3: "MWI", nome: "Malawi" },
        { id: "ml", iso3: "MLI", nome: "Mali" },
        { id: "ma", iso3: "MAR", nome: "Marrocos" },
        { id: "mr", iso3: "MRT", nome: "Mauritânia" },
        { id: "mu", iso3: "MUS", nome: "Maurício" },
        { id: "mz", iso3: "MOZ", nome: "Moçambique" },
        { id: "na", iso3: "NAM", nome: "Namíbia" },
        { id: "ne", iso3: "NER", nome: "Níger" },
        { id: "ng", iso3: "NGA", nome: "Nigéria" },
        { id: "cf", iso3: "CAF", nome: "República Centro-Africana" },
        { id: "rw", iso3: "RWA", nome: "Ruanda" },
        { id: "st", iso3: "STP", nome: "São Tomé e Príncipe" },
        { id: "sn", iso3: "SEN", nome: "Senegal" },
        { id: "sc", iso3: "SYC", nome: "Seicheles" },
        { id: "sl", iso3: "SLE", nome: "Serra Leoa" },
        { id: "so", iso3: "SOM", nome: "Somália" },
        { id: "za", iso3: "ZAF", nome: "África do Sul" },
        { id: "ss", iso3: "SSD", nome: "Sudão do Sul" },
        { id: "sd", iso3: "SDN", nome: "Sudão" },
        { id: "tz", iso3: "TZA", nome: "Tanzânia" },
        { id: "tg", iso3: "TGO", nome: "Togo" },
        { id: "tn", iso3: "TUN", nome: "Tunísia" },
        { id: "ug", iso3: "UGA", nome: "Uganda" },
        { id: "zm", iso3: "ZMB", nome: "Zâmbia" },
        { id: "zw", iso3: "ZWE", nome: "Zimbábue" },

        // América
        { id: "ag", iso3: "ATG", nome: "Antígua e Barbuda" },
        { id: "ar", iso3: "ARG", nome: "Argentina" },
        { id: "bs", iso3: "BHS", nome: "Bahamas" },
        { id: "bb", iso3: "BRB", nome: "Barbados" },
        { id: "bz", iso3: "BLZ", nome: "Belize" },
        { id: "bo", iso3: "BOL", nome: "Bolívia" },
        { id: "br", iso3: "BRA", nome: "Brasil" },
        { id: "ca", iso3: "CAN", nome: "Canadá" },
        { id: "cl", iso3: "CHL", nome: "Chile" },
        { id: "co", iso3: "COL", nome: "Colômbia" },
        { id: "cr", iso3: "CRI", nome: "Costa Rica" },
        { id: "cu", iso3: "CUB", nome: "Cuba" },
        { id: "dm", iso3: "DMA", nome: "Dominica" },
        { id: "ec", iso3: "ECU", nome: "Equador" },
        { id: "sv", iso3: "SLV", nome: "El Salvador" },
        { id: "gd", iso3: "GRD", nome: "Granada" },
        { id: "gt", iso3: "GTM", nome: "Guatemala" },
        { id: "gy", iso3: "GUY", nome: "Guiana" },
        { id: "ht", iso3: "HTI", nome: "Haiti" },
        { id: "hn", iso3: "HND", nome: "Honduras" },
        { id: "jm", iso3: "JAM", nome: "Jamaica" },
        { id: "mx", iso3: "MEX", nome: "México" },
        { id: "ni", iso3: "NIC", nome: "Nicarágua" },
        { id: "pa", iso3: "PAN", nome: "Panamá" },
        { id: "py", iso3: "PRY", nome: "Paraguai" },
        { id: "pe", iso3: "PER", nome: "Peru" },
        { id: "do", iso3: "DOM", nome: "República Dominicana" },
        { id: "kn", iso3: "KNA", nome: "São Cristóvão e Névis" },
        { id: "lc", iso3: "LCA", nome: "Santa Lúcia" },
        { id: "vc", iso3: "VCT", nome: "São Vicente e Granadinas" },
        { id: "sr", iso3: "SUR", nome: "Suriname" },
        { id: "tt", iso3: "TTO", nome: "Trinidad e Tobago" },
        { id: "us", iso3: "USA", nome: "Estados Unidos" },
        { id: "uy", iso3: "URY", nome: "Uruguai" },
        { id: "ve", iso3: "VEN", nome: "Venezuela" },

        // Ásia
        { id: "af", iso3: "AFG", nome: "Afeganistão" },
        { id: "sa", iso3: "SAU", nome: "Arábia Saudita" },
        { id: "am", iso3: "ARM", nome: "Armênia" },
        { id: "az", iso3: "AZE", nome: "Azerbaijão" },
        { id: "bh", iso3: "BHR", nome: "Bahrein" },
        { id: "bd", iso3: "BGD", nome: "Bangladesh" },
        { id: "bt", iso3: "BTN", nome: "Butão" },
        { id: "bn", iso3: "BRN", nome: "Brunei" },
        { id: "kh", iso3: "KHM", nome: "Camboja" },
        { id: "kz", iso3: "KAZ", nome: "Cazaquistão" },
        { id: "cn", iso3: "CHN", nome: "China" },
        { id: "cy", iso3: "CYP", nome: "Chipre" },
        { id: "kp", iso3: "PRK", nome: "Coreia do Norte" },
        { id: "kr", iso3: "KOR", nome: "Coreia do Sul" },
        { id: "ae", iso3: "ARE", nome: "Emirados Árabes Unidos" },
        { id: "ph", iso3: "PHL", nome: "Filipinas" },
        { id: "ge", iso3: "GEO", nome: "Geórgia" },
        { id: "in", iso3: "IND", nome: "Índia" },
        { id: "id", iso3: "IDN", nome: "Indonésia" },
        { id: "ir", iso3: "IRN", nome: "Irã" },
        { id: "iq", iso3: "IRQ", nome: "Iraque" },
        { id: "il", iso3: "ISR", nome: "Israel" },
        { id: "jp", iso3: "JPN", nome: "Japão" },
        { id: "jo", iso3: "JOR", nome: "Jordânia" },
        { id: "kw", iso3: "KWT", nome: "Kuwait" },
        { id: "kg", iso3: "KGZ", nome: "Quirguistão" },
        { id: "la", iso3: "LAO", nome: "Laos" },
        { id: "lb", iso3: "LBN", nome: "Líbano" },
        { id: "my", iso3: "MYS", nome: "Malásia" },
        { id: "mv", iso3: "MDV", nome: "Maldivas" },
        { id: "mn", iso3: "MNG", nome: "Mongólia" },
        { id: "me", iso3: "MNE", nome: "Montenegro" },
        { id: "mm", iso3: "MMR", nome: "Mianmar" },
        { id: "np", iso3: "NPL", nome: "Nepal" },
        { id: "om", iso3: "OMN", nome: "Omã" },
        { id: "pk", iso3: "PAK", nome: "Paquistão" },
        { id: "ps", iso3: "PSE", nome: "Palestina" },
        { id: "qa", iso3: "QAT", nome: "Catar" },
        { id: "sg", iso3: "SGP", nome: "Singapura" },
        { id: "lk", iso3: "LKA", nome: "Sri Lanka" },
        { id: "sy", iso3: "SYR", nome: "Síria" },
        { id: "tj", iso3: "TJK", nome: "Tajiquistão" },
        { id: "th", iso3: "THA", nome: "Tailândia" },
        { id: "tl", iso3: "TLS", nome: "Timor-Leste" },
        { id: "tr", iso3: "TUR", nome: "Turquia" },
        { id: "tm", iso3: "TKM", nome: "Turcomenistão" },
        { id: "uz", iso3: "UZB", nome: "Uzbequistão" },
        { id: "vn", iso3: "VNM", nome: "Vietnã" },
        { id: "ye", iso3: "YEM", nome: "Iêmen" },

        // Europa
        { id: "al", iso3: "ALB", nome: "Albânia" },
        { id: "ad", iso3: "AND", nome: "Andorra" },
        { id: "at", iso3: "AUT", nome: "Áustria" },
        { id: "by", iso3: "BLR", nome: "Belarus" },
        { id: "be", iso3: "BEL", nome: "Bélgica" },
        { id: "ba", iso3: "BIH", nome: "Bósnia e Herzegovina" },
        { id: "bg", iso3: "BGR", nome: "Bulgária" },
        { id: "hr", iso3: "HRV", nome: "Croácia" },
        { id: "dk", iso3: "DNK", nome: "Dinamarca" },
        { id: "sk", iso3: "SVK", nome: "Eslováquia" },
        { id: "si", iso3: "SVN", nome: "Eslovênia" },
        { id: "es", iso3: "ESP", nome: "Espanha" },
        { id: "ee", iso3: "EST", nome: "Estônia" },
        { id: "fi", iso3: "FIN", nome: "Finlândia" },
        { id: "fr", iso3: "FRA", nome: "França" },
        { id: "de", iso3: "DEU", nome: "Alemanha" },
        { id: "gr", iso3: "GRC", nome: "Grécia" },
        { id: "hu", iso3: "HUN", nome: "Hungria" },
        { id: "ie", iso3: "IRL", nome: "Irlanda" },
        { id: "is", iso3: "ISL", nome: "Islândia" },
        { id: "it", iso3: "ITA", nome: "Itália" },
        { id: "lv", iso3: "LVA", nome: "Letônia" },
        { id: "li", iso3: "LIE", nome: "Liechtenstein" },
        { id: "lt", iso3: "LTU", nome: "Lituânia" },
        { id: "lu", iso3: "LUX", nome: "Luxemburgo" },
        { id: "mt", iso3: "MLT", nome: "Malta" },
        { id: "md", iso3: "MDA", nome: "Moldávia" },
        { id: "mc", iso3: "MCO", nome: "Mônaco" },
        { id: "mk", iso3: "MKD", nome: "Macedônia do Norte" },
        { id: "no", iso3: "NOR", nome: "Noruega" },
        { id: "nl", iso3: "NLD", nome: "Países Baixos" },
        { id: "pl", iso3: "POL", nome: "Polônia" },
        { id: "pt", iso3: "PRT", nome: "Portugal" },
        { id: "gb", iso3: "GBR", nome: "Reino Unido" },
        { id: "cz", iso3: "CZE", nome: "Tchéquia" },
        { id: "ro", iso3: "ROU", nome: "Romênia" },
        { id: "ru", iso3: "RUS", nome: "Rússia" },
        { id: "sm", iso3: "SMR", nome: "San Marino" },
        { id: "rs", iso3: "SRB", nome: "Sérvia" },
        { id: "se", iso3: "SWE", nome: "Suécia" },
        { id: "ch", iso3: "CHE", nome: "Suíça" },
        { id: "ua", iso3: "UKR", nome: "Ucrânia" },
        { id: "va", iso3: "VAT", nome: "Vaticano" },

        // Oceania
        { id: "au", iso3: "AUS", nome: "Austrália" },
        { id: "fj", iso3: "FJI", nome: "Fiji" },
        { id: "ki", iso3: "KIR", nome: "Kiribati" },
        { id: "mh", iso3: "MHL", nome: "Ilhas Marshall" },
        { id: "fm", iso3: "FSM", nome: "Micronésia" },
        { id: "nr", iso3: "NRU", nome: "Nauru" },
        { id: "nz", iso3: "NZL", nome: "Nova Zelândia" },
        { id: "pw", iso3: "PLW", nome: "Palau" },
        { id: "pg", iso3: "PNG", nome: "Papua-Nova Guiné" },
        { id: "ws", iso3: "WSM", nome: "Samoa" },
        { id: "sb", iso3: "SLB", nome: "Ilhas Salomão" },
        { id: "to", iso3: "TON", nome: "Tonga" },
        { id: "tv", iso3: "TUV", nome: "Tuvalu" },
        { id: "vu", iso3: "VUT", nome: "Vanuatu" }
    ];
    const parametros = new URLSearchParams(window.location.search);
    const modo = parametros.get("modo");
    let rodadasEscolhidas = parametros.get("rodadas");
    const titulo = document.querySelector(".titulo");

    async function salvarDados(modo, acertos, rodadas) {
        const response = await fetch("/partidas", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                "modo": modo,
                "acertos": acertos,
                "rodadas": rodadas,
            })

        })
        const resultado = await response.json();

        if (!response.ok) {
            console.error("Erro ao salvar:", resultado);
            return;
        }

        console.log("Partida salva:", resultado);
    }
    if (modo === 'pais') {
        const contador = document.querySelector(".contador");
        contador.textContent = `Rodada: 0/${rodadasEscolhidas}`;
        const pontos = document.querySelector(".acertos");
        const paisesSorteados = [];
        function novaRodada() {
            titulo.textContent = "Descubra qual país é pelo mapa";
            let paisSorteado = '';
            while (true) {
                const paisSorteado1 = paises[Math.floor(Math.random() * paises.length)];
                if (!paisesSorteados.includes(paisSorteado1)) {
                    paisesSorteados.push(paisSorteado1);
                    paisSorteado = paisSorteado1;
                    break;
                }
            }
            const mapa = `https://borderly.dev/country/${paisSorteado.id}.svg`;
            const base = document.querySelector(".base");
            base.innerHTML = `<img src="${mapa}" alt="${paisSorteado.nome}">`;
            const botoes = document.querySelectorAll(".opcao");
            botoes.forEach(botao => {
                botao.classList.remove("correto", "errado");
                botao.textContent = "";
            });
            const numero = Math.floor(Math.random() * botoes.length);
            const botoesErrados = [0, 1, 2, 3]
            botoesErrados.splice(numero, 1);
            const paisesErrados = [];
            while (paisesErrados.length < 3) {
                const paisSorteio = paises[Math.floor(Math.random() * paises.length)];
                if (paisSorteio !== paisSorteado && !paisesErrados.includes(paisSorteio)) {
                    paisesErrados.push(paisSorteio);
                }
            }
            botoesErrados.forEach((botao, index) => {
                botoes[botao].textContent = paisesErrados[index].nome;
                botoes[botao].classList.add('errado');
            });
            botoes[numero].textContent = paisSorteado.nome;
            botoes[numero].classList.add('correto');
        }
        const botoes = document.querySelectorAll(".opcao");
        let acertos = 0;
        let rodadas = 0;
        botoes.forEach(botao => {
            botao.addEventListener("click", () => {
                rodadas++;
                const correto = document.querySelector(".correto")
                correto.style.backgroundColor = "green";
                botao.style.color = "black";
                const acertou = botao.classList.contains("correto");
                if (acertou) {
                    acertos++;
                }
                else {
                    botao.style.backgroundColor = "red"
                    botao.style.color = "black"
                }
                contador.textContent = `Rodada: ${rodadas}/${rodadasEscolhidas}`;
                pontos.textContent = `Acertos: ${acertos}`;
                botoes.forEach(botao => {
                    botao.disabled = true
                })
                if (rodadas >= rodadasEscolhidas) {
                    salvarDados(modo, acertos, rodadasEscolhidas)
                    setTimeout(() => {
                        titulo.textContent = "Fim de jogo!";
                        document.querySelector(".base").innerHTML =
                            `<p>Você acertou ${acertos} de ${rodadasEscolhidas} perguntas! ${Math.round((acertos / rodadasEscolhidas) * 100)}%</p>`;
                        botoes.forEach(botao => {
                            botao.disabled = true;
                            botao.style.display = "none";
                            contador.style.display = "none";
                            pontos.style.display = "none";
                        });

                    }, 1000);
                    return;
                }
                setTimeout(() => {
                    botao.style.color = "#355b49";
                    correto.style.color = "#355b49"
                    botao.style.backgroundColor = "";
                    correto.style.backgroundColor = ""
                    botoes.forEach(botao => {
                        botao.disabled = false;
                    });
                    novaRodada();
                }, 1000);
            });
        });
        novaRodada();
    }
    if (modo === 'bandeira') {
        const contador = document.querySelector(".contador");
        contador.textContent = `Rodada: 0/${rodadasEscolhidas}`;
        const pontos = document.querySelector(".acertos");
        const paisesSorteados = [];
        function novaRodada() {
            titulo.textContent = "De qual país é essa bandeira";
            let paisSorteado = '';
            while (true) {
                const paisSorteado1 = paises[Math.floor(Math.random() * paises.length)];
                if (!paisesSorteados.includes(paisSorteado1)) {
                    paisesSorteados.push(paisSorteado1);
                    paisSorteado = paisSorteado1;
                    break;
                }
            }
            const bandeira = `https://flags.restcountries.com/v5/svg/${paisSorteado.id}.svg`;
            const base = document.querySelector(".base");
            base.innerHTML = `<img src="${bandeira}" alt="${paisSorteado.nome}">`;
            const botoes = document.querySelectorAll(".opcao");
            botoes.forEach(botao => {
                botao.classList.remove("correto", "errado");
                botao.textContent = "";
            });
            const numero = Math.floor(Math.random() * botoes.length);
            const botoesErrados = [0, 1, 2, 3]
            botoesErrados.splice(numero, 1);
            const paisesErrados = [];
            while (paisesErrados.length < 3) {
                const paisSorteio = paises[Math.floor(Math.random() * paises.length)];
                if (paisSorteio !== paisSorteado && !paisesErrados.includes(paisSorteio)) {
                    paisesErrados.push(paisSorteio);
                }
            }
            botoesErrados.forEach((botao, index) => {
                botoes[botao].textContent = paisesErrados[index].nome;
                botoes[botao].classList.add('errado');
            });
            botoes[numero].textContent = paisSorteado.nome;
            botoes[numero].classList.add('correto');
        }
        const botoes = document.querySelectorAll(".opcao");
        let acertos = 0;
        let rodadas = 0;
        botoes.forEach(botao => {
            botao.addEventListener("click", () => {
                rodadas++;
                const correto = document.querySelector(".correto")
                correto.style.backgroundColor = "green";
                correto.style.color = "black";
                botao.style.color = "black";
                const acertou = botao.classList.contains("correto");
                if (acertou) {
                    acertos++;
                }
                else {
                    botao.style.backgroundColor = "red"
                    botao.style.color = "black"
                }
                contador.textContent = `Rodada: ${rodadas}/${rodadasEscolhidas}`;
                pontos.textContent = `Acertos: ${acertos}`;
                botoes.forEach(botao => {
                    botao.disabled = true
                })
                if (rodadas >= rodadasEscolhidas) {
                    salvarDados(modo, acertos, rodadasEscolhidas)
                    setTimeout(() => {
                        titulo.textContent = "Fim de jogo!";
                        document.querySelector(".base").innerHTML =
                            `<p>Você acertou ${acertos} de ${rodadasEscolhidas} perguntas! ${Math.round((acertos / rodadasEscolhidas) * 100)}%</p>`;
                        botoes.forEach(botao => {
                            botao.disabled = true;
                            botao.style.display = "none";
                            contador.style.display = "none";
                            pontos.style.display = "none";
                        });

                    }, 1000);
                    return;
                }
                setTimeout(() => {
                    botao.style.color = "#355b49";
                    correto.style.color = "#355b49"
                    botao.style.backgroundColor = "";
                    correto.style.backgroundColor = ""
                    botoes.forEach(botao => {
                        botao.disabled = false;
                    });
                    novaRodada();
                }, 1000);
            });
        });
        novaRodada();
    } if (modo === 'capital') {
        const contador = document.querySelector(".contador");
        contador.textContent = `Rodada: 0/${rodadasEscolhidas}`;
        const pontos = document.querySelector(".acertos");
        const paisesSorteados = [];
        function novaRodada() {
            titulo.textContent = "De qual país é essa capital";
            let paisSorteado = '';
            while (true) {
                const paisSorteado1 = paises[Math.floor(Math.random() * paises.length)];
                if (!paisesSorteados.includes(paisSorteado1)) {
                    paisesSorteados.push(paisSorteado1);
                    paisSorteado = paisSorteado1;
                    break;
                }
            }
            const botoes = document.querySelectorAll(".opcao");
            botoes.forEach(botao => {
                botao.classList.remove("correto", "errado");
                botao.textContent = "";
            });
            const numero = Math.floor(Math.random() * botoes.length);
            const botoesErrados = [0, 1, 2, 3]
            botoesErrados.splice(numero, 1);
            const paisesErrados = [];
            while (paisesErrados.length < 3) {
                const paisSorteio = paises[Math.floor(Math.random() * paises.length)];
                if (paisSorteio !== paisSorteado && !paisesErrados.includes(paisSorteio)) {
                    paisesErrados.push(paisSorteio);
                }
            }
            botoesErrados.forEach((botao, index) => {
                botoes[botao].textContent = paisesErrados[index].nome;
                botoes[botao].classList.add('errado');
            });
            botoes[numero].textContent = paisSorteado.nome;
            botoes[numero].classList.add('correto');
            const url = "https://countries.dev/alpha/" + paisSorteado.id.toUpperCase();
            const base = document.querySelector(".base");
            fetch(url)
                .then(res => res.json())
                .then(dados => {
                    const capital = dados.capital;
                    base.innerHTML = `<p>${capital}</p>`;
                });
        }
        const botoes = document.querySelectorAll(".opcao");
        let acertos = 0;
        let rodadas = 0;
        botoes.forEach(botao => {
            botao.addEventListener("click", () => {
                rodadas++;
                const correto = document.querySelector(".correto")
                correto.style.backgroundColor = "green";
                correto.style.color = "black";
                botao.style.color = "black";
                const acertou = botao.classList.contains("correto");
                if (acertou) {
                    acertos++;
                }
                else {
                    botao.style.backgroundColor = "red"
                    botao.style.color = "black"
                }
                contador.textContent = `Rodada: ${rodadas}/${rodadasEscolhidas}`;
                pontos.textContent = `Acertos: ${acertos}`;
                botoes.forEach(botao => {
                    botao.disabled = true
                })
                if (rodadas >= rodadasEscolhidas) {
                    salvarDados(modo, acertos, rodadasEscolhidas)
                    setTimeout(() => {
                        titulo.textContent = "Fim de jogo!";
                        document.querySelector(".base").innerHTML =
                            `<p>Você acertou ${acertos} de ${rodadasEscolhidas} perguntas! ${Math.round((acertos / rodadasEscolhidas) * 100)}%</p>`;
                        botoes.forEach(botao => {
                            botao.disabled = true;
                            botao.style.display = "none";
                            contador.style.display = "none";
                            pontos.style.display = "none";
                        });

                    }, 1000);
                    return;
                }
                setTimeout(() => {
                    botao.style.color = "#355b49";
                    correto.style.color = "#355b49"
                    botao.style.backgroundColor = "";
                    correto.style.backgroundColor = ""
                    botoes.forEach(botao => {
                        botao.disabled = false;
                    });
                    novaRodada();
                }, 1000);
            });

        });
        novaRodada();
    }
    if (modo === 'continente') {
        const contador = document.querySelector(".contador");
        contador.textContent = `Rodada: 0/${rodadasEscolhidas}`;
        const pontos = document.querySelector(".acertos");
        const paisesSorteados = [];
        async function regiaoPais(pais) {
            const url = `https://countries.dev/alpha/${pais.id.toUpperCase()}`;
            const resposta = await fetch(url);
            const dados = await resposta.json();
            return dados.region;
        }
        async function novaRodada() {
            titulo.textContent = "Qual país faz parte desse continente?";
            let paisSorteado = '';
            while (true) {
                const paisSorteado1 = paises[Math.floor(Math.random() * paises.length)];
                if (!paisesSorteados.includes(paisSorteado1)) {
                    paisesSorteados.push(paisSorteado1);
                    paisSorteado = paisSorteado1;
                    break;
                }
            }
            const regiao = await regiaoPais(paisSorteado);
            if (regiao === "Europe") {
                document.querySelector(".base").innerHTML = `<p>Europa</p>`;
            } if (regiao === "Asia") {
                document.querySelector(".base").innerHTML = `<p>Ásia</p>`;
            } if (regiao === "Africa") {
                document.querySelector(".base").innerHTML = `<p>África</p>`;
            } if (regiao === "Americas") {
                document.querySelector(".base").innerHTML = `<p>América</p>`;
            } if (regiao === "Oceania") {
                document.querySelector(".base").innerHTML = `<p>Oceania</p>`;
            }
            const paisesErrados = [];
            while (paisesErrados.length < 3) {
                const candidato = paises[Math.floor(Math.random() * paises.length)];
                if (candidato.id === paisSorteado.id ||
                    paisesErrados.includes(candidato)) {
                    continue;
                }
                const regiaoCandidato = await regiaoPais(candidato);
                if (regiaoCandidato !== regiao) {
                    paisesErrados.push(candidato);
                }
            }
            const botoes = document.querySelectorAll(".opcao");
            const numero = Math.floor(Math.random() * 4);
            botoes.forEach(botao => {
                botao.classList.remove("correto", "errado");
                botao.textContent = "";
            });
            botoes[numero].textContent = paisSorteado.nome;
            botoes[numero].classList.add("correto");
            const posicoes = [0, 1, 2, 3];
            posicoes.splice(numero, 1);
            posicoes.forEach((posicao, index) => {
                botoes[posicao].textContent = paisesErrados[index].nome;
                botoes[posicao].classList.add("errado");
            });
        }
        const botoes = document.querySelectorAll(".opcao");
        let acertos = 0;
        let rodadas = 0;
        botoes.forEach(botao => {
            botao.addEventListener("click", () => {
                rodadas++;
                const correto = document.querySelector(".correto")
                correto.style.backgroundColor = "green";
                correto.style.color = "black";
                botao.style.color = "black";
                const acertou = botao.classList.contains("correto");
                if (acertou) {
                    acertos++;
                }
                else {
                    botao.style.backgroundColor = "red"
                    botao.style.color = "black"
                }
                contador.textContent = `Rodada: ${rodadas}/${rodadasEscolhidas}`;
                pontos.textContent = `Acertos: ${acertos}`;
                botoes.forEach(botao => {
                    botao.disabled = true
                })
                if (rodadas >= rodadasEscolhidas) {
                    salvarDados(modo, acertos, rodadasEscolhidas)
                    setTimeout(() => {
                        titulo.textContent = "Fim de jogo!";
                        document.querySelector(".base").innerHTML =
                            `<p>Você acertou ${acertos} de ${rodadasEscolhidas} perguntas! ${Math.round((acertos / rodadasEscolhidas) * 100)}%</p>`;
                        botoes.forEach(botao => {
                            botao.disabled = true;
                            botao.style.display = "none";
                            contador.style.display = "none";
                            pontos.style.display = "none";
                        });

                    }, 1000);
                    return;
                }
                setTimeout(() => {
                    botao.style.color = "#355b49";
                    correto.style.color = "#355b49"
                    botao.style.backgroundColor = "";
                    correto.style.backgroundColor = ""
                    botoes.forEach(botao => {
                        botao.disabled = false;
                    });
                    novaRodada();
                }, 1000);
            });
        });
        novaRodada();
    }


    if (modo === 'vizinhos') {
        if (rodadasEscolhidas === "195") {
            rodadasEscolhidas = '157'
        }
        const contador = document.querySelector(".contador");
        contador.textContent = `Rodada: 0/${rodadasEscolhidas}`;
        const pontos = document.querySelector(".acertos");
        const paisesSorteados = [];
        async function regiaoPais(pais) {
            const url = `https://countries.dev/alpha/${pais.id.toUpperCase()}`;
            const resposta = await fetch(url);
            const dados = await resposta.json();
            return dados.borders || [];;
        }
        async function novaRodada() {
            titulo.textContent = "Qual país é vizinho desse?";
            let paisSorteado = '';
            while (true) {
                const paisSorteado1 = paises[Math.floor(Math.random() * paises.length)];
                const vizinhos = await regiaoPais(paisSorteado1);
                if (!paisesSorteados.includes(paisSorteado1) && vizinhos.length > 0) {
                    paisesSorteados.push(paisSorteado1);
                    paisSorteado = paisSorteado1;
                    break;
                }
            }
            const regiao = await regiaoPais(paisSorteado);
            const vizinhoEscolhido = regiao[Math.floor(Math.random() * regiao.length)];
            let vizinhoNome = ''
            for (let i = 0; i < paises.length; i++) {
                if (paises[i].iso3 === vizinhoEscolhido) {
                    vizinhoNome = paises[i].nome
                }
            }
            document.querySelector(".base").innerHTML = `<p>${paisSorteado.nome}</p>`;

            const paisesErrados = [];
            while (paisesErrados.length < 3) {
                const candidato = paises[Math.floor(Math.random() * paises.length)];
                if (candidato.id === paisSorteado.id ||
                    paisesErrados.includes(candidato)) {
                    continue;
                }
                if (!regiao.includes(candidato.iso3)) {
                    paisesErrados.push(candidato);
                }
            }
            const botoes = document.querySelectorAll(".opcao");
            const numero = Math.floor(Math.random() * 4);
            botoes.forEach(botao => {
                botao.classList.remove("correto", "errado");
                botao.textContent = "";
            });
            botoes[numero].textContent = vizinhoNome;
            botoes[numero].classList.add("correto");
            const posicoes = [0, 1, 2, 3];
            posicoes.splice(numero, 1);
            posicoes.forEach((posicao, index) => {
                botoes[posicao].textContent = paisesErrados[index].nome;
                botoes[posicao].classList.add("errado");
            });
        }
        const botoes = document.querySelectorAll(".opcao");
        let acertos = 0;
        let rodadas = 0;
        botoes.forEach(botao => {
            botao.addEventListener("click", () => {
                rodadas++;
                const correto = document.querySelector(".correto")
                correto.style.backgroundColor = "green";
                correto.style.color = "black";
                botao.style.color = "black";
                const acertou = botao.classList.contains("correto");
                if (acertou) {
                    acertos++;
                }
                else {
                    botao.style.backgroundColor = "red"
                    botao.style.color = "black"
                }
                contador.textContent = `Rodada: ${rodadas}/${rodadasEscolhidas}`;
                pontos.textContent = `Acertos: ${acertos}`;
                botoes.forEach(botao => {
                    botao.disabled = true
                })
                if (rodadas >= rodadasEscolhidas) {
                    salvarDados(modo, acertos, rodadasEscolhidas)
                    setTimeout(() => {
                        titulo.textContent = "Fim de jogo!";
                        document.querySelector(".base").innerHTML =
                            `<p>Você acertou ${acertos} de ${rodadasEscolhidas} perguntas! ${Math.round((acertos / rodadasEscolhidas) * 100)}%</p>`;
                        botoes.forEach(botao => {
                            botoes.forEach(botao => {
                                botao.disabled = true;
                            });
                            botao.style.display = "none";
                            contador.style.display = "none";
                            pontos.style.display = "none";
                        });

                    }, 1000);
                    return;
                }
                setTimeout(() => {
                    botao.style.color = "#355b49";
                    correto.style.color = "#355b49"
                    botao.style.backgroundColor = "";
                    correto.style.backgroundColor = ""
                    botoes.forEach(botao => {
                        botao.disabled = false;
                    });
                    novaRodada();
                }, 1000);
            });
        });
        novaRodada();

    }
    const voltarButton = document.getElementById("voltar");
    voltarButton.addEventListener("click", () => {
        window.location.href = "/home";
    })
})