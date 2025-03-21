// 1. Função que exibe "Olá, mundo!" no console
function olaMundo() {
    console.log("Olá, mundo!");  
}

// 2. Função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console
function olaNome(nome) {
    console.log(`Olá, ${nome}!`);  
}

// 3. Função que recebe um número como parâmetro e retorna o dobro desse número
function dobro(numero) {
    return numero * 2;  
}

// 4. Função que recebe três números como parâmetros e retorna a média deles
function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;  
}

// 5. Função que recebe dois números como parâmetros e retorna o maior deles
function maiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;  
    } else {
        return numero2;
    }
}

// 6. Função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(numero) {
    return numero * numero;  
}
