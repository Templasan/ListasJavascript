// 1. Alterar o conteúdo da tag h1 com document.querySelector
document.querySelector("h1").textContent = "Hora do Desafio";  // Pergunta/desafio 1


// 2. Função para exibir no console a mensagem ao clicar no botão Console
function exibirNoConsole() {
    console.log("O botão foi clicado"); 
}


// 3. Função para exibir um alerta com a mensagem ao clicar no botão Alerta
function exibirAlerta() {
    alert("Eu amo JS");  
}


// 4. Função que pergunta o nome de uma cidade e exibe um alerta concatenando com o texto
function exibirPrompt() {
    let cidade = prompt("Qual cidade do Brasil você escolhe?");
    alert(`Estive em ${cidade} e lembrei de você`);
}

// 5. Função para pedir 2 números inteiros e exibir o resultado da soma
function fazerSoma() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let soma = num1 + num2;
    alert(`O resultado da soma é: ${soma}`); 
}



