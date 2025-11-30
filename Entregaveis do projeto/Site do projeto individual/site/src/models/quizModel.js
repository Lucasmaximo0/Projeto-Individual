var database = require("../database/config");

function salvar(usuario, total) {

    var instrucao = `
        INSERT INTO ResultadoQuiz (fkUsuario, pontuacaoTotal)
        VALUES ('${usuario}', '${total}');
    `;

    return database.executar(instrucao);
}

function estatisticas() {

    var instrucao = `
        SELECT pontuacaoTotal, dataRegistro
        FROM ResultadoQuiz
        ORDER BY dataRegistro ASC;
    `;

    return database.executar(instrucao);
}

module.exports = {
    salvar,
    estatisticas
};
 
/* lista as respostas  e os dados vao servir para a dashboard
*/