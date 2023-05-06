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

/*

let anoNasc = Number(prompt("Ano de nascimento:"));

function calcularIdade (anoNasc) {
    let anoAtual = 2023;
    let idade = anoAtual - anoNasc;
    let mensagem = '';
if (idade < 16) {
    mensagem = 'Você não pode votar';
}//else if (idade === 16 || idade === 17 || idade >= 70)  {
    else if (idade >= 16 && idade <= 17 || idade >= 70)  {
    mensagem = 'Você não tem obrigatoriedade de votar';
} //else if (idade >= 18 && idade < 70){
   // mensagem = 'Obrigatório o voto';
//}
else {
    mensagem = 'É obrigatório seu voto!';
}

    return idade
}
//console.log(calcularIdade(anoNasc))
*/


/*
let ensinoMedio = prompt('Concluiu o ensino médio? [S/N]?')

let idade = Number(prompt('Sua idade:'))

let outraFaculdade = prompt('Está cursando outra faculdade?')

let resultado = verificaFaculdade (ensinoMedio,idade,outraFaculdade)
console.log(resultado)

function verificaFaculdade (ensinoMedio,idade,outraFaculdade) {
    let mensagem = '';
    if //(ensinoMedio === 'SIM' || ensinoMedio === 'sim'  ){
       (ensinoMedio.toUpperCase() === 'SIM'
        && idade >= 18 
        && (outraFaculdade.toUpperCase() === 'NÃO'|| outraFaculdade.toUpperCase() === 'NAO')){
         mensagem = 'Seja bem vindo!'
    } else {
        mensagem = 'Você não está apto para ingressar em nossa instituição'
       }
       return mensagem;
    
    }
    
*/

/*
let pais = 'Croacia'; 

switch (pais) {
    case 'Brasil':
        console.log('Brasileiro');
        break;
        case 'França':
        console.log('Francês');
        break;
        case 'Croacia':
        console.log('Croata');
        break;
        case 'Argentina':
        console.log('Argentino');
        break;
    default:
        console.log('Nacionalidade não encontrada');
        break;
}
*/ 


let nN1 = Number(prompt("Digite um número: "))
let nN2 = Number(prompt("Digite outro número: "))

let opcao = Number(prompt('Digite uma opção:\n 1- soma \n2- Subtração \n 3- Multiplicação\n 4- Divisão'))

switch (opcao) {
    case 1:
        let soma = nN1 + nN2;
        if (soma > 10 && soma >20 ) {
            console.log('Soma entre 10 e 20: ',soma);
        }
        break;

     case 2:
        let subtração = nN1 - nN2;
        console.log(subtração);
         break;
    case 3:
        let multiplicação = nN1 * nN2;
         console.log(multiplicação);
        break;  
    case 4:
        let divisão = nN1 / nN2;
        console.log(divisão);
         break;   

    default: 
        console.log('Opção não encontrada');
        break;

}



