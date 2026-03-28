export function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

export function definirClassificacao(imc, tdClassificacao) {

    const linha = tdClassificacao.parentElement;
    const colunas = linha.querySelectorAll("td");

    // LIMPAR TUDO (ESSENCIAL)
    linha.classList.remove("normal", "alerta");

    colunas.forEach(td => {
        td.classList.remove("critico");
    });

    // 🔴 CRÍTICO
    if (imc < 18.5 || imc >= 40) {
        tdClassificacao.textContent = imc < 18.5 
            ? "Abaixo do Peso" 
            : "Obesidade Grau 3";

        colunas.forEach(td => td.classList.add("critico"));
    }

    // 🟢 NORMAL
    else if (imc < 25) {
        tdClassificacao.textContent = "Peso Normal";

        linha.classList.add("normal");
    }

    // 🟠 OUTROS
    else if (imc < 30) {
        tdClassificacao.textContent = "Sobrepeso";

        linha.classList.add("alerta");
    }

    else if (imc < 35) {
        tdClassificacao.textContent = "Obesidade Grau 1";

        linha.classList.add("alerta");
    }

    else {
        tdClassificacao.textContent = "Obesidade Grau 2";

        linha.classList.add("alerta");
    }
}