/* let condicional2 = false;
let condicional1 = true;

if (condicional2) {
    console.log("Entramos na condição")
}

if (condicional1) {
   console.log("Entramos na condição")
}
*/



//Crie uma função que: 
//Receba 2 números (chamaremos de num1 e num2)
//Compara esses números entre si:
// Se os números forem iguais, retorna uma mensagem de sucesso
//Depois, chame uma função com números que foram inseridos pelo usuário através do prompt


/*
let n1 = Number(prompt("Digite um número:"));
let n2 = Number(prompt("Digite outro número:"));
//console.log(compararNumeros(n1,n2))
let saoIguais = compararNumeros(n1,n2);
console.log(saoIguais);


function compararNumeros(num1, num2) {
   let resultado = '';
    if (num1 === num2) {
        resultado = 'Números iguais'
    } else {
        resultado = 'Números diferentes'
    }
    return resultado;
}
//console.log(compararNumeros(47,57))
*/

//Crie uma função que: 

//Recebe 2 números (chamaremos de num1 e num2)
//Compara esses números entre si: 
//Retorna mensagens dizendo se o primeiro número é {maior/menor/igual} ao segundo número
//Depois, chame a função com números que foram inseridos pelo usuário através do prompt

/*
function compara(nn1,nn2) {
    let result = '';
    if (nn1 > nn2) {
        result = 'Número 1 maior: ' + nn1 + ' e ' + nn2;
    
    } else if (nn1 < nn2) {
        result = 'Número 1 menor: ' + nn1 + ' e ' + nn2;
    } else {
        result = 'Números iguais: ' + nn1 + ' e ' + nn2;
    }
    return result;
}

console.log(compara(09,15))
  */



let anoNasc = Number(prompt("Ano de nascimento:"));

function calcularIdade (anoNasc) {
    let anoAtual = 2023;
    let idade = anoAtual - anoNasc;
    let mensagem = '';
if (idade < 16) {
    mensagem = 'Você não pode votar';
}else if (idade >= 16 && idade >=60) {
    mensagem = 'Você não tem obrigatoriedade de votar';
}

    return idade




}
}
//console.log(calcularIdade(anoNasc))
