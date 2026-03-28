import { calcularImc, definirClassificacao } from './opc.js';

// Seleciona todas as linhas da tabela
const linhas = document.querySelectorAll('tbody tr');

linhas.forEach(linha => {

    const colunas = linha.children;

    const altura = Number(colunas[2].textContent);
    const peso = Number(colunas[3].textContent);

    const tdImc = colunas[4];
    const tdClassificacao = colunas[5];

    // Calcula IMC
    const imc = calcularImc(peso, altura);

    // Exibe IMC
    tdImc.textContent = imc.toFixed(2);

    // Define classificação + estilos
    definirClassificacao(imc, tdClassificacao);
});