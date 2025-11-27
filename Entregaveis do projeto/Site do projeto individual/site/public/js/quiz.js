
var perguntas = [
    "Escolha um livro que interesse!",
    "Escolha uma música que mais te agrada:",
    "Qual desses versículos mais chama sua atenção?",
    "Há quanto tempo você conhece Jesus?",
    "Você é cristão?"
];


var alternativas = [
    ["Bíblia Sagrada", "Hoje é Um Bom Dia Para Viver Milagre", "Bom Dia, Espírito Santo"],
    ["Escolho Deus", "Me Ama", "Tudo é Teu"],
    ["Provérbios 17:22", "Hebreus 11:1", "João 3:16"],
    ["De 1 a 10 anos", "De 10 a 20 anos", "De 20 a 30 anos", "Mais de 40 anos"],
    ["Sim", "Não"]
];


var pontosPerguntas = [
    [30, 20, 25],
    [25, 20, 30],
    [20, 25, 30],
    [10, 20, 30, 40],
    [20, 0]
];


var indice = 0;
var respostas = [];
var pontos = 0;

var pergunta = document.getElementById("pergunta");
var alternativas_el = document.getElementById("alternativas");
var progresso = document.getElementById("progress");
var resultadoBox = document.getElementById("resultadoBox");
var resultadoTitulo = document.getElementById("resultadoTitulo");
var resultadoTexto = document.getElementById("resultadoTexto");


function iniciar() {
    indice = 0;
    respostas = [];
    pontos = 0;

    resultadoBox.style.display = "none";
    mostrarPergunta();
}


function mostrarPergunta() {
    pergunta.innerHTML = perguntas[indice];
    progresso.innerHTML = "Pergunta " + (indice + 1) + " de 5";

    alternativas_el.innerHTML = "";

    for (var i = 0; i < alternativas[indice].length; i++) {
        alternativas_el.innerHTML += `
            <label class="alternativa">
                <input type="radio" name="resp" value="${i}">
                ${alternativas[indice][i]}
            </label>
        `;
    }

    btnNext.innerHTML = indice == perguntas.length - 1 ? "Finalizar" : "Próxima";
}


btnNext.addEventListener("click", function () {

    var marcada = document.querySelector("input[name='resp']:checked");

    if (!marcada) {
        alert("Escolha uma opção!");
        return;
    }

    respostas[indice] = Number(marcada.value);

    if (indice < perguntas.length - 1) {
        indice++;
        mostrarPergunta();
    } else {
        finalizar();
    }
});

// Botão anterior
btnPrev.addEventListener("click", function () {
    if (indice > 0) {
        indice--;
        mostrarPergunta();
    }
});

// Finalizar Quiz
function finalizar() {

    pontos = 0;

    for (var i = 0; i < respostas.length; i++) {
        var r = respostas[i];
        pontos += pontosPerguntas[i][r];
    }

    var mensagem = "";

    if (pontos <= 40) {
        mensagem = "Você está no começo da caminhada espiritual!";
    } else if (pontos <= 80) {
        mensagem = "Você já tem uma boa base de fé!";
    } else {
        mensagem = "Você tem grande maturidade espiritual!";
    }

    resultadoTitulo.innerHTML = "Sua pontuação final: " + pontos + " pontos";
    resultadoTexto.innerHTML = mensagem;

    resultadoBox.style.display = "block";

    pergunta.innerHTML = "";
    alternativas_el.innerHTML = "";
    progresso.innerHTML = "";

    salvarResultado();
    window.location.href='../dashboard/dashboard.html'
}

// configurar no back
function salvarResultado() {

    var idUsuario = sessionStorage.ID_USUARIO;

    fetch("/quiz/salvar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: idUsuario,
            respostas: respostas.toString(), 
            total: pontos
        })
    })
    .then(function(resposta) {
        if (resposta.ok) {
            console.log("Resultado salvo no banco!");
        } else {
            console.log("Erro ao salvar resultado.");
        }
    })
    .catch(function (erro) {
        console.log("Erro no fetch:", erro);
    });
}


iniciar();


