


var numeroPergunta = 1;
var pontos = 0;


var pergunta = document.getElementById("pergunta");
var alternativas = document.getElementById("alternativas");
var progresso = document.getElementById("progress");
var resultadoBox = document.getElementById("resultadoBox");
var resultadoTitulo = document.getElementById("resultadoTitulo");
var resultadoTexto = document.getElementById("resultadoTexto");

mostrarPergunta1();


function mostrarPergunta1() {
    pergunta.innerHTML = "Escolha um livro que interesse!";
    progresso.innerHTML = "Pergunta 1 de 5";

    alternativas.innerHTML = `
        <label class="alternativa"><input type="radio" name="q" value="30"> Bíblia Sagrada</label>
        <label class="alternativa"><input type="radio" name="q" value="20"> Hoje é Um Bom Dia Para Viver Milagre</label>
        <label class="alternativa"><input type="radio" name="q" value="25"> Bom Dia, Espírito Santo</label>
    `;
}

// Função 
function mostrarPergunta2() {
    pergunta.innerHTML = "Escolha uma música que mais te agrada:";
    progresso.innerHTML = "Pergunta 2 de 5";

    alternativas.innerHTML = `
        <label class="alternativa"><input type="radio" name="q" value="25"> Escolho Deus</label>
        <label class="alternativa"><input type="radio" name="q" value="20"> Me Ama</label>
        <label class="alternativa"><input type="radio" name="q" value="30"> Tudo é Teu</label>
    `;
}

// Função 
function mostrarPergunta3() {
    pergunta.innerHTML = "Qual desses versículos mais chama sua atenção?";
    progresso.innerHTML = "Pergunta 3 de 5";

    alternativas.innerHTML = `
        <label class="alternativa"><input type="radio" name="q" value="20"> Provérbios 17:22</label>
        <label class="alternativa"><input type="radio" name="q" value="25"> Hebreus 11:1</label>
        <label class="alternativa"><input type="radio" name="q" value="30"> João 3:16</label>
    `;
}

// Função 
function mostrarPergunta4() {
    pergunta.innerHTML = "Há quanto tempo você conhece Jesus?";
    progresso.innerHTML = "Pergunta 4 de 5";

    alternativas.innerHTML = `
        <label class="alternativa"><input type="radio" name="q" value="10"> De 1 a 10 anos</label>
        <label class="alternativa"><input type="radio" name="q" value="20"> De 10 a 20 anos</label>
        <label class="alternativa"><input type="radio" name="q" value="30"> De 20 a 30 anos</label>
        <label class="alternativa"><input type="radio" name="q" value="40"> Mais de 40 anos</label>
    `;
}

// Função 
function mostrarPergunta5() {
    pergunta.innerHTML = "Você é cristão?";
    progresso.innerHTML = "Pergunta 5 de 5";

    alternativas.innerHTML = `
        <label class="alternativa"><input type="radio" name="q" value="20"> Sim</label>
        <label class="alternativa"><input type="radio" name="q" value="0"> Não</label>
    `;
}

// Botão 
document.getElementById("btnNext").addEventListener("click", function () {
    var selecionada = document.querySelector("input[name='q']:checked");

    if (!selecionada) {
        alert("Escolha uma opção!");
        return;
    }

    pontos += Number(selecionada.value);
    numeroPergunta++;

    if (numeroPergunta == 2) mostrarPergunta2();
    else if (numeroPergunta == 3) mostrarPergunta3();
    else if (numeroPergunta == 4) mostrarPergunta4();
    else if (numeroPergunta == 5) mostrarPergunta5();
    else finalizar();
});


function finalizar() {
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
    alternativas.innerHTML = "";
    progresso.innerHTML = "";
}

