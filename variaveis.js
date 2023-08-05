// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?


let nome = prompt("Qual o seu lindo nome?");
let idade = prompt(nome + ", quantos anos você tem? (Apenas o número)");
let linguagem = prompt(nome + ", qual a linguagem de progrmação que você está estudando?");

document.write(nome + ", então você tem " + idade + " anos e está na jornada da linguagem " + linguagem);

if(linguagem.toLocaleLowerCase().includes("javascript") || linguagem.toLocaleLowerCase() === ("js")) {
    const jsMDN = document.createElement("a");
    jsMDN.textContent = "Documentação JavaScript";
    jsMDN.href = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript";
    document.body.appendChild(jsMDN);
} else if (linguagem.toLocaleLowerCase().includes("react") || linguagem.toLocaleLowerCase() === ("react")) {
    const reactMDN = document.createElement("a");
    reactMDN.textContent = "Documentação React";
    reactMDN.href = "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started";
    document.body.appendChild(reactMDN);
} else if (linguagem.toLocaleLowerCase().includes("php") || linguagem.toLocaleLowerCase() === ("php")) {
    const phpMDN = document.createElement("a");
    phpMDN.textContent = "Documentação PHP";
    phpMDN.href = "https://developer.mozilla.org/en-US/docs/Glossary/PHP";
    document.body.appendChild(phpMDN);
} else {
    const mensagemErro = document.createElement("p");
    mensagemErro.textContent = "***Sua linguagem não existe no Banco de Dados***";
    document.body.appendChild(mensagemErro);
};