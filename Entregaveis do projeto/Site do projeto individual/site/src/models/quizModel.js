var database = require("../database/config");

function salvar(usuario, respostas, total) {

    var instrucao = `
        INSERT INTO ResultadoQuiz (fkUsuario, perguntasRespondidas, pontuacaoTotal)
        VALUES ('${usuario}', '${respostas}', '${total}');
    `;

    return database.executar(instrucao);
}

function estatisticas() {

    var instrucao = `
        SELECT pontuacaoTotal, dataRegistro
        FROM ResultadoQuiz
        ORDER BY dataRegistro DESC
        LIMIT 20;
    `;

    return database.executar(instrucao);
}

module.exports = {
    salvar,
    estatisticas
};
 
/* lista as respostas  e os dados vao servir para a dashboard
*/