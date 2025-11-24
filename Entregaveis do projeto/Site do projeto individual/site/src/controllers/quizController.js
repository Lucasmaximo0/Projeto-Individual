var quizModel = require("../models/quizModel");

function salvar(req, res) {

    var usuario = req.body.usuario;
    var respostas = req.body.respostas;
    var total = req.body.total;

    if (usuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } 
    else if (respostas == undefined) {
        res.status(400).send("As respostas estão undefined!");
    }
    else if (total == undefined) {
        res.status(400).send("A pontuação total está undefined!");
    }
    else {

        quizModel.salvar(usuario, respostas, total)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json("Houve um erro ao salvar o resultado do quiz.");
            });

    }
}

function estatisticas(req, res) {

    quizModel.estatisticas()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json("Houve um erro ao buscar as estatísticas do quiz.");
        });

}

module.exports = {
    salvar,
    estatisticas
};