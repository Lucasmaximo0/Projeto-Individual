CREATE DATABASE ProjetoIndividual;
use ProjetoIndividual;


CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    dataCadastro datetime default current_timestamp
);


CREATE TABLE ResultadoQuiz (
    idResultadoQuiz INT AUTO_INCREMENT PRIMARY KEY,
    fkUsuario INT NOT NULL,
    pontuacaoTotal INT NOT NULL,
    dataRegistro DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

INSERT INTO Usuario (nome, email, senha)
VALUES 
('Lucas Santos', 'lucas@example.com', '123456'),
('Maria Silva', 'maria@gmail.com', 'senha123'),
('João Pereira', 'joao@outlook.com', 'abc123'),
('Ana Costa', 'ana.costa@gmail.com', 'senha456');

INSERT INTO ResultadoQuiz (fkUsuario, pontuacaoTotal)
VALUES
(1, 60),
(1, 75),
(1, 90);

INSERT INTO ResultadoQuiz (fkUsuario, pontuacaoTotal)
VALUES
(2, 45),
(2, 80);

SELECT pontuacaoTotal, dataRegistro
FROM ResultadoQuiz
WHERE fkUsuario = 1;

SELECT 
    Usuario.nome,
    ResultadoQuiz.pontuacaoTotal,
    ResultadoQuiz.dataRegistro
FROM Usuario
JOIN ResultadoQuiz
    ON Usuario.idUsuario = ResultadoQuiz.fkUsuario;


select * from usuario;
select * from ResultadoQuiz;


