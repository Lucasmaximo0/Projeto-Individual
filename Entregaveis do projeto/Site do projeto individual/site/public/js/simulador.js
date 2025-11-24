function simular() {

    var livro = input_livro.value;
    var paginas = Number(input_paginas.value);
    var dias = Number(input_dias.value);
    var paginasPorDia = paginas / dias;

    var resultado = document.getElementById("resultado_simulador");

    if (livro == "") {
        resultado.innerHTML = "Digite o nome do livro.";
    }

    if (paginas <= 0) {
        resultado.innerHTML = "Digite a quantidade de páginas.";
    }

    if (dias <= 0) {
        resultado.innerHTML = "Digite em quantos dias deseja terminar.";
    }

    if (livro != "" && paginas > 0 && dias > 0) {

        

        resultado.innerHTML = `
            <h3>Planejamento de Leitura</h3>
            <p><strong>Livro escolhido:</strong> ${livro}</p>
            <p><strong>Total de páginas:</strong> ${paginas}</p>
            <p><strong>Dias desejados:</strong> ${dias}</p>
            <p><strong>Você precisa ler aproximadamente:</strong> ${paginasPorDia.toFixed(1)} páginas por dia.</p>
            <br>
            <p>Que Deus abençoe sua leitura!</p>
        `;
    }
}