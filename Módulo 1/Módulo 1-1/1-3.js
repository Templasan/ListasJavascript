// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador1 = 1;
while (contador1 <= 10) {
  console.log(contador1);  
  contador1++;
}

// 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;
while (contador2 >= 0) {
  console.log(contador2); 
  contador2--;
}

// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeroRegressivo = parseInt(prompt("Digite um número para a contagem regressiva:"));
while (numeroRegressivo >= 0) {
  console.log(numeroRegressivo); 
  numeroRegressivo--;
}

// 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroProgressivo = parseInt(prompt("Digite um número para a contagem progressiva:"));
let contadorProgressivo = 0;
while (contadorProgressivo <= numeroProgressivo) {
  console.log(contadorProgressivo);  
  contadorProgressivo++;
}
