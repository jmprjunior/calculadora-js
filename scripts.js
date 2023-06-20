let um = document.querySelector("#um");
let dois = document.querySelector("#dois");
let tres = document.querySelector("#tres");
let quatro = document.querySelector("#quatro");
let cinco = document.querySelector("#cinco");
let seis = document.querySelector("#seis");
let sete = document.querySelector("#sete");
let oito = document.querySelector("#oito");
let nove = document.querySelector("#nove");
let zero = document.querySelector("#zero");
let decimal = document.querySelector("#decimal");

let somar = document.querySelector("#somar");
let subtrair = document.querySelector("#subtrair");
let multiplicar = document.querySelector("#multiplicar");
let dividir = document.querySelector("#dividir");
let limpar = document.querySelector("#limpar");
let igual = document.querySelector("#igual");
let resultado = document.querySelector("#resultado");

let calculou = false;

function controle(){
    if(calculou){
        calculou = false;
        resultado.value = "";
    }
}

zero.addEventListener("click", () => {
    controle();
    resultado.value += "0"});
um.addEventListener("click", () => {
    controle();
    resultado.value += "1"});
dois.addEventListener("click", () => {
    controle();
    resultado.value += "2"});
tres.addEventListener("click", () => {
    controle();
    resultado.value += "3"});
quatro.addEventListener("click", () => {
    controle();
    resultado.value += "4"});
cinco.addEventListener("click", () => {
    controle();
    resultado.value += "5"});
seis.addEventListener("click", () => {
    controle();
    resultado.value += "6"});
sete.addEventListener("click", () => {
    controle();
    resultado.value += "7"});
oito.addEventListener("click", () => {
    controle();
    resultado.value += "8"});
nove.addEventListener("click", () => {
    controle();
    resultado.value += "9"});

somar.addEventListener("click", () => {
    if (resultado.value !== "" && (resultado.value.slice(-1) >= 0 && resultado.value.slice(-1) <= 9)){
        resultado.value += "+";
        controle();
    }
});
multiplicar.addEventListener("click", () => {
    if (resultado.value !== "" && (resultado.value.slice(-1) >= 0 && resultado.value.slice(-1) <= 9)){
        resultado.value += "*";
        controle();
    }
});
subtrair.addEventListener("click", () => {
    if (resultado.value !== "" && (resultado.value.slice(-1) >= 0 && resultado.value.slice(-1) <= 9)){
        resultado.value += "-";
        controle();
    }
});
dividir.addEventListener("click", () => {
    if (resultado.value !== "" && (resultado.value.slice(-1) >= 0 && resultado.value.slice(-1) <= 9)){
        resultado.value += "/";
        controle();
    }
});
decimal.addEventListener("click", () => {resultado.value += "."});

limpar.addEventListener("click", () => {resultado.value = ""});
igual.addEventListener("click", () => {
    if (resultado.value !== "" && (resultado.value.slice(-1) >= 0 && resultado.value.slice(-1) <= 9)){
        resultado.value = eval(resultado.value);
        calculou = true;   
    }    
});