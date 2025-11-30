fetch("/quiz/estatisticas")
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (dados) {
        console.log("Dados recebidos:", dados);

        

        if (!dados || dados.length === 0) {
            console.log("Nenhum dado encontrado.");
            return;
        }

        var labels = [];
        var valores = [];

        for (var i = 0; i < dados.length; i++) {
            labels.push("Tentativa " + (i + 1));
            valores.push(dados[i].pontuacaoTotal);
        }

        // atualizar os cards
        var totalPontos = dados[dados.length - 1].pontuacaoTotal;
        var totalTentativas = dados.length;

        document.getElementById("card_pontos").innerHTML = totalPontos;
        document.getElementById("card_tentativas").innerHTML = totalTentativas;

        /*Grafico de barra*/
        var ctx1 = document.getElementById("graficoPontuacoes");
        
        new Chart(ctx1, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Pontuação Total",
                    data: valores,
                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                    borderColor: "rgb(54, 162, 235)",
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // GRÁFICO DE LINHA
        const ctx2 = document.getElementById("graficoEvolucao");

        new Chart(ctx2, {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Evolução da Pontuação",
                    data: valores,
                    borderColor: "#32b9cd",
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

    })
    .catch(function (erro) {
        console.log("ERRO AO BUSCAR ESTATÍSTICAS:", erro);
    });
