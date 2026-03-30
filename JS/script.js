import { calcularImc, classificarImc } from "./opc.js";

let input = document.querySelector('.entrada')

let linhas = document.querySelectorAll("tbody tr");

linhas.forEach(function (linha) {
    let altura = parseFloat(linha.children[2].textContent);
    let peso = parseFloat(linha.children[3].textContent);

    let imc = calcularImc(peso, altura);

    let classificacao = classificarImc(imc);

    linha.children[4].textContent = imc.toFixed(1);
    linha.children[5].textContent = classificacao;
});

linhas.forEach(function (linha) {
    if (linha.children[5].textContent === "Abaixo do peso" || linha.children[5].textContent === "Obesidade Grau III (Mórbida)") {
        linha.classList.add("extremo");
    }
    else if (linha.children[5].textContent === "Peso normal") {
        linha.classList.add("normal");
    }
    else {
        linha.classList.add("outros");
    }
});

input.addEventListener('input', () => {
    let busca = input.value.toLowerCase();

    linhas.forEach(linha => {
        let texto = linha.children[5].textContent.toLowerCase();

        if (texto.includes(busca)) {
            linha.classList.remove("invisivel");
        } else {
            linha.classList.add("invisivel");
        }
    });
});
