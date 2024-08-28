// Crie uma data representando o primeiro dia do ano corrente
let primeiroDiaDoAno = new Date(new Date().getFullYear(), 0, 1);

// Crie uma data representando o dia de hoje
let hoje = new Date();

// Calcule a diferença em dias entre o primeiro dia do ano e o dia de hoje
let diferencaEmMilissegundos = hoje - primeiroDiaDoAno;
let milissegundosPorDia = 24 * 60 * 60 * 1000;
let diferencaEmDias = Math.floor(diferencaEmMilissegundos / milissegundosPorDia);

// Exiba o resultado no console
console.log("Diferença em dias entre o primeiro dia do ano e hoje:", diferencaEmDias);

// Formate a data de hoje no formato "DD/MM/YYYY"
let dia = String(hoje.getDate()).padStart(2, '0');
let mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Meses são baseados em 0
let ano = hoje.getFullYear();
let dataFormatada = `${dia}/${mes}/${ano}`;

// Exiba a data formatada no console
console.log("Data de hoje no formato DD/MM/YYYY:", dataFormatada);