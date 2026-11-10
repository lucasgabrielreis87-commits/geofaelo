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
    let rodadasEscolhidas = parametros.get("rodadas");
    if (rodadasEscolhidas === '195') {
        rodadasEscolhidas = '97';
    }
    const modo = parametros.get("modo");
    const titulo = document.querySelector(".titulo")
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

    }
    if (modo === 'rico') {
        if (rodadasEscolhidas === "97") {
            rodadasEscolhidas = '93'
        }
        const contador = document.querySelector(".contador");
        contador.textContent = `Rodada: 0/${rodadasEscolhidas}`;
        const pontos = document.querySelector(".acertos");
        const paisesSorteados = [];
        titulo.textContent = "Qual dos dois países possui maior PIB?";
        async function pegarPIB() {
            const resposta = await fetch(
                "https://statisticsoftheworld.com/api/v1/indicators/IMF.NGDPD"
            );

            const dados = await resposta.json();

            const pibPaises = new Map();

            dados.data.forEach(pais => {
                pibPaises.set(pais.countryId, pais.value);

            });
            return pibPaises;
        }
        async function novaRodada() {
            let paisSorteadoA = '';
            let paisSorteadoB = '';
            while (true) {
                const paisSorteado1 = paises[Math.floor(Math.random() * paises.length)];
                if (!paisesSorteados.includes(paisSorteado1) && paisSorteado1.iso3 !== 'ERI' && paisSorteado1.iso3 !== 'CUB' && paisSorteado1.iso3 !== 'PRK' && paisSorteado1.iso3 !== 'PSE' && paisSorteado1.iso3 !== 'SYR' && paisSorteado1.iso3 !== 'MCO' && paisSorteado1.iso3 !== 'VAT') {
                    paisesSorteados.push(paisSorteado1);
                    paisSorteadoA = paisSorteado1;
                    break;
                }
            }

            while (true) {
                const paisSorteado2 = paises[Math.floor(Math.random() * paises.length)];
                if (!paisesSorteados.includes(paisSorteado2) && paisSorteado2.iso3 !== 'ERI' && paisSorteado2.iso3 !== 'CUB' && paisSorteado2.iso3 !== 'PRK' && paisSorteado2.iso3 !== 'PSE' && paisSorteado2.iso3 !== 'SYR' && paisSorteado2.iso3 !== 'MCO' && paisSorteado2.iso3 !== 'VAT') {
                    paisesSorteados.push(paisSorteado2);
                    paisSorteadoB = paisSorteado2;
                    break;
                }
            }
            const img1 = document.querySelector("#imagem1");
            const img2 = document.querySelector("#imagem2");
            const nome1 = document.querySelector("#nome1");
            const nome2 = document.querySelector("#nome2");

            img1.src = `https://borderly.dev/country/${paisSorteadoA.id}.svg`;
            img2.src = `https://borderly.dev/country/${paisSorteadoB.id}.svg`;
            nome1.textContent = paisSorteadoA.nome;
            nome2.textContent = paisSorteadoB.nome;
            const mapaPIB = await pegarPIB();

            let paisSorteadoAPib = mapaPIB.get(paisSorteadoA.iso3);
            let paisSorteadoBPib = mapaPIB.get(paisSorteadoB.iso3);
            const botao1 = document.querySelector("#botao1");
            const botao2 = document.querySelector("#botao2");
            botao1.classList.remove("correto");
            botao2.classList.remove("correto");
            if (paisSorteadoAPib === undefined) {
                paisSorteadoAPib = 0
            }
            if (paisSorteadoBPib === undefined) {
                paisSorteadoBPib = 0
            }


            if (paisSorteadoAPib > paisSorteadoBPib) {
                botao1.classList.add('correto')
            }
            if (paisSorteadoBPib > paisSorteadoAPib) {
                botao2.classList.add('correto')
            }

        }
        novaRodada();

        const botoes = document.querySelectorAll("button");
        let acertos = 0;
        let rodadas = 0;
        botoes.forEach(botao => {
            botao.addEventListener("click", () => {
                rodadas++;
                botao.style.color = "black"
                if (botao.classList.contains('correto')) {
                    acertos++;
                    botao.style.backgroundColor = "green"
                    pontos.textContent = `Acertos: ${acertos}`;
                }
                else {
                    botao.style.backgroundColor = "red"
                }
                contador.textContent = `Rodada: ${rodadas}/${rodadasEscolhidas}`;
                botoes.forEach(botao => {
                    botao.disabled = true
                })

                if (rodadas >= rodadasEscolhidas) {
                    salvarDados(modo, acertos, rodadasEscolhidas)
                    setTimeout(() => {
                        const div = document.querySelector("div");
                        div.innerHTML = `<p>Você acertou ${acertos} de ${rodadasEscolhidas} rodadas! ${(Math.round((acertos / rodadasEscolhidas) * 100))}%</p>`;
                        titulo.textContent = "Fim de jogo!";
                        const botoes = document.querySelectorAll("button");
                        botoes.forEach(botao => {
                            botao.disabled = true
                            botao.style.display = "none";
                        });
                    }, 1000)
                }
                else {
                    setTimeout(() => {
                        botao.style.backgroundColor = "";
                        botao.style.color = "#355b49";
                        botoes.forEach(botao => {
                            botao.disabled = false
                        })
                        novaRodada();
                    }, 1000);
                }
            })
        })
    }
    if (modo === 'maior') {
        titulo.textContent = "Qual dos dois países tem a maior extensão territorial?"
        const contador = document.querySelector(".contador");
        contador.textContent = `Rodada: 0/${rodadasEscolhidas}`;
        const pontos = document.querySelector(".acertos");
        const paisesSorteados = [];
        async function novaRodada() {

            let paisSorteadoA = '';
            let paisSorteadoB = '';
            while (true) {
                const paisSorteado1 = paises[Math.floor(Math.random() * paises.length)];
                if (!paisesSorteados.includes(paisSorteado1)) {
                    paisesSorteados.push(paisSorteado1);

                    paisSorteadoA = paisSorteado1;
                    break;
                }
            }
            while (true) {
                const paisSorteado2 = paises[Math.floor(Math.random() * paises.length)];
                if (!paisesSorteados.includes(paisSorteado2)) {
                    paisesSorteados.push(paisSorteado2);

                    paisSorteadoB = paisSorteado2;
                    break;
                }
            }
            const urlA = `https://countries.dev/alpha/${paisSorteadoA.id.toUpperCase()}`
            const urlB = `https://countries.dev/alpha/${paisSorteadoB.id.toUpperCase()}`;

            const respostaA = await fetch(urlA);
            const dadosA = await respostaA.json();
            const areaA = dadosA.area;

            const respostaB = await fetch(urlB);
            const dadosB = await respostaB.json();
            const areaB = dadosB.area;

            const botao1 = document.querySelector("#botao1");
            const botao2 = document.querySelector("#botao2");
            botao1.classList.remove("correto");
            botao2.classList.remove("correto");
            if (areaA > areaB) {
                botao1.classList.add('correto')
            }
            if (areaB > areaA) {
                botao2.classList.add('correto')
            }
            const img1 = document.querySelector("#imagem1");
            const img2 = document.querySelector("#imagem2");
            const nome1 = document.querySelector("#nome1");
            const nome2 = document.querySelector("#nome2");
            img1.src = `https://borderly.dev/country/${paisSorteadoA.id}.svg`;
            img2.src = `https://borderly.dev/country/${paisSorteadoB.id}.svg`;
            nome1.textContent = paisSorteadoA.nome;
            nome2.textContent = paisSorteadoB.nome;
        }


        const botoes = document.querySelectorAll("button");
        let acertos = 0;
        let rodadas = 0;
        botoes.forEach(botao => {
            botao.addEventListener("click", () => {
                rodadas++;
                botao.style.color = "black";
                if (botao.classList.contains('correto')) {
                    acertos++;
                    botao.style.backgroundColor = "green"
                    pontos.textContent = `Acertos: ${acertos}`;
                }
                else {
                    botao.style.backgroundColor = "red"

                }
                contador.textContent = `Rodada: ${rodadas}/${rodadasEscolhidas}`;
                botoes.forEach(botao => {
                    botao.disabled = true
                })
                if (rodadas >= rodadasEscolhidas) {
                    salvarDados(modo, acertos, rodadasEscolhidas)
                    setTimeout(() => {
                        const div = document.querySelector("div");
                        div.innerHTML = `<p>Você acertou ${acertos} de ${rodadasEscolhidas} rodadas! ${(Math.round((acertos / rodadasEscolhidas) * 100))}%</p>`;
                        titulo.textContent = "Fim de jogo!";
                        const botoes = document.querySelectorAll("button");
                        botoes.forEach(botao => {
                            botao.style.display = "none";
                            botao.disabled = true
                        });
                    }, 1000)
                } else {

                    setTimeout(() => {
                        botao.style.color = "#355b49";
                        botao.style.backgroundColor = "";
                        botoes.forEach(botao => {
                            botao.disabled = false
                        })
                        novaRodada();
                    }, 1000);
                }
            })
        })
        novaRodada();

    }
    if (modo === 'populacao') {
        titulo.textContent = "Qual dos dois países é mais populoso";
        const contador = document.querySelector(".contador");
        contador.textContent = `Rodada: 0/${rodadasEscolhidas}`;
        const pontos = document.querySelector(".acertos");
        const paisesSorteados = [];
        async function novaRodada() {

            let paisSorteadoA = '';
            let paisSorteadoB = '';
            while (true) {
                const paisSorteado1 = paises[Math.floor(Math.random() * paises.length)];
                if (!paisesSorteados.includes(paisSorteado1)) {
                    paisesSorteados.push(paisSorteado1);

                    paisSorteadoA = paisSorteado1;
                    break;
                }
            }
            while (true) {
                const paisSorteado2 = paises[Math.floor(Math.random() * paises.length)];
                if (!paisesSorteados.includes(paisSorteado2)) {
                    paisesSorteados.push(paisSorteado2);

                    paisSorteadoB = paisSorteado2;
                    break;
                }
            }
            const urlA = `https://countries.dev/alpha/${paisSorteadoA.id.toUpperCase()}`
            const urlB = `https://countries.dev/alpha/${paisSorteadoB.id.toUpperCase()}`;

            const respostaA = await fetch(urlA);
            const dadosA = await respostaA.json();
            const populacaoA = dadosA.population;

            const respostaB = await fetch(urlB);
            const dadosB = await respostaB.json();
            const populacaoB = dadosB.population;
            
            const botao1 = document.querySelector("#botao1");
            const botao2 = document.querySelector("#botao2");
            botao1.classList.remove("correto");
            botao2.classList.remove("correto");
            if (populacaoA > populacaoB) {
                botao1.classList.add('correto')
            }
            if (populacaoB > populacaoA) {
                botao2.classList.add('correto')
            }
            const img1 = document.querySelector("#imagem1");
            const img2 = document.querySelector("#imagem2");
            const nome1 = document.querySelector("#nome1");
            const nome2 = document.querySelector("#nome2");
            img1.src = `https://borderly.dev/country/${paisSorteadoA.id}.svg`;
            img2.src = `https://borderly.dev/country/${paisSorteadoB.id}.svg`;
            nome1.textContent = paisSorteadoA.nome;
            nome2.textContent = paisSorteadoB.nome;
        }


        const botoes = document.querySelectorAll("button");
        let acertos = 0;
        let rodadas = 0;
        botoes.forEach(botao => {
            botao.addEventListener("click", () => {
                rodadas++;
                botao.style.color = "black"
                if (botao.classList.contains('correto')) {
                    acertos++;
                    botao.style.backgroundColor = "green"
                    pontos.textContent = `Acertos: ${acertos}`;
                }
                else {
                    botao.style.backgroundColor = "red"

                }
                contador.textContent = `Rodada: ${rodadas}/${rodadasEscolhidas}`;
                botoes.forEach(botao => {
                    botao.disabled = true
                })
                if (rodadas >= rodadasEscolhidas) {
                    salvarDados(modo, acertos, rodadasEscolhidas)
                     setTimeout(() => {
                    const div = document.querySelector("div");
                    div.innerHTML = `<p>Você acertou ${acertos} de ${rodadasEscolhidas} rodadas! ${(Math.round((acertos / rodadasEscolhidas) * 100))}%</p>`;
                    titulo.textContent = "Fim de jogo!";
                    const botoes = document.querySelectorAll(".opcao");
                    botoes.forEach(botao => {
                        botao.style.display = "none";
                        botao.disabled = true
                    });
                }, 1000)
                } else {
                    setTimeout(() => {
                        botao.style.backgroundColor = "";
                        botao.style.color = "#355b49";
                        botoes.forEach(botao => {
                            botao.disabled = false
                        })
                        novaRodada();
                    }, 1000);
                }
            })
        })
        novaRodada();

    }

    const voltarButton = document.getElementById("voltar");
    voltarButton.addEventListener("click", () => {
        window.location.href = "/home";
    }
    )
}
)