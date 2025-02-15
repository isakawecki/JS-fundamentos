console.log("Teste");


//Fundamentos /////////////////////////////////////


//criar uma variável
//var nome = "valor"

var variavel = "Olá mundo";

console.log("variavel");


//variáveis e tipos de dados//

var numero = 10;
console.log(numero + 5);

console.log("10" + 5);



//checagem de um dado
console.log(typeof numero);

var booleano = true; //false
console.log(typeof booleano);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;


//let e const
//novas formas de declarar variáveis
let x = 10;
const y = 5;
//let permite que o valor sera reatribuido após a declaração


//operadores aritméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);


//operadores de comparação

//compara se é igual
console.log (x == y);

//compara se é diferente
console.log (x != y);


console.log("5" !== 5);
console.log("5" === 5);


//operadores lógicos
//AND &&
//OR  ||
console.log(10 > 5 && 20>5)
console.log(10 > 5 && 20<5)

console.log(10 > 5 || 20 > 5)
console.log(10 > 5 || 20 < 5)
console.log(10 < 5 || 20 < 5)

//Conversão de tipos
const meuNumero = "123"

const meuNumeroConvertido = Number(meuNumero)

console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido)


// Estrutura de condçãp - if, else, else if

const idade = 15

if(idade < 13){
    console.log("Criança")

} else if(idade < 20){
console.log("Adolescente")

} else{
    console.log("Adulto")
}

// Switch

const fruta = "mamão"

switch(fruta){
    case "banana":
      console.log("banana é a fruta");
    break;

    case "maçã":
       console.log("maçã é a fruta");
    break;

    default:
        console.log ("fruta não encontrada")
}

//Estruturas de repetição
// 1 ,2, 3, 4.... => dependendo de uma condição


// contador, condição de limite, incremento
for (let i = 0; i < 5;  i++) {
   // concatenação
    console.log("O valor de i é:" + i);
}

//while
let k = 0;

while(k < 5){
    console.log("O valor de k:" + k)
    k++;
}

//do while
let j = 0;

do{

    console.log(" o valor de j:" + j)

    j++
} while( j = 5);


//funções
// function nome(arg1, arg2) {corpo}
function oi(nome){
        console.log("Olá" + nome)
}

//invocacao = nome()
oi("Bella");

//escopo de variáveis
let cor = "azul";

function mostrarCor(){
    let cor = "verde"
    console.log(cor);
}

console.log(cor);

mostrarCor();


//push
let frutas = ["maçã", "banana"];
frutas.push("laranja");  // Adiciona "laranja" no final do array

console.log(frutas)  // ["maçã", "banana", "laranja"]

//join 
let frutas = ["maçã", "banana", "laranja"];
let listaFrutas = frutas.join(", ");  // Junta os elementos com uma vírgula e espaço
console.log(listaFrutas);  // "maçã, banana, laranja"

