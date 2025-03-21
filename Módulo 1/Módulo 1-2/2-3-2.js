// 1. Função que calcula o índice de massa corporal (IMC) de uma pessoa
function calcularIMC(peso, altura) {
    return peso / (altura * altura);  
    // Calcula o IMC dividindo o peso pela altura elevada ao quadrado
}

// 2. Função que calcula o valor do fatorial de um número
function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;  
    }
    return fatorial;  
}

// 3. Função que converte um valor em dólar para reais
function converterDolarParaReal(dolar) {
    const cotacao = 4.80;
    return dolar * cotacao;  
}

// 4. Função que mostra a área e o perímetro de uma sala retangular
function salaRetangular(altura, largura) {
    const area = altura * largura;  
    const perimetro = 2 * (altura + largura);  
    console.log(`Área da sala retangular: ${area} m²`);
    console.log(`Perímetro da sala retangular: ${perimetro} m`);
}

// 5. Função que mostra a área e o perímetro de uma sala circular
function salaCircular(raio) {
    const area = 3.14 * raio * raio;  
    const perimetro = 2 * 3.14 * raio;  
    console.log(`Área da sala circular: ${area} m²`);
    console.log(`Perímetro da sala circular: ${perimetro} m`);
}

// 6. Função que mostra a tabuada de um número
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);  
    }
}
