CREATE DATABASE ProjetoIndividual;
use ProjetoIndividual;


CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    dataCadastro datetime default current_timestamp
);

CREATE TABLE testemunho (
    idtestemunho INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(500) NOT null,
    conteudo TEXT not null,
    dataPuplicacao datetime default current_timestamp,
    Usuario_idUsuario INT not null,
    FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Musica (
    idMusica INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(45) not null,
    compositor VARCHAR(45),
    link VARCHAR(200) not null,
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    Usuario_idUsuario INT not null,
    FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE livros (
    idlivros INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(60) not null,
    autor VARCHAR(45) not null,
    ISBN VARCHAR(45),
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    Usuario_idUsuario INT,
    FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Estudo (
    idEstudo INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(45)not null,
    conteudo TEXT not null,
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    Usuario_idUsuario INT not null,
    FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE comentario (
    idcomentario INT AUTO_INCREMENT PRIMARY KEY,
    conteudo TEXT not null,
    dataComentario DATETIME DEFAULT CURRENT_TIMESTAMP,
    Usuario_idUsuario INT not null,
    testemunho_idtestemunho INT not null,
    FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (testemunho_idtestemunho) REFERENCES testemunho(idtestemunho)
);

CREATE TABLE ResultadoQuiz (
    idResultadoQuiz INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    livro VARCHAR(100),
    paginas INT,
    dias INT,
    perguntasRespondidas VARCHAR(255),
    pontuacaoTotal INT,
    dataRegistro DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

