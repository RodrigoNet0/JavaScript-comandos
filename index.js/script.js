var n1 = Number(window.prompt("Qual a primeira nota"))
var n2 = Number(window.prompt("Qual a segunda nota"))
var n3 = Number(window.prompt("Qual a terceira nota"))
var soma = n1 + n2 + n3
document.write(`soma das notas e ${soma}`)
// aulas separadas
var nome = window.prompt('Qual seu nome?')
document.write(`Olá <strong>${nome}</strong>! Seu nome tem ${nome.length}<br>`) // quantidade de caracteres
document.write(`Seu nome em maiusculo é ${nome.toUpperCase()}<br>`) // transformar string em M
document.write(`Seu nome em minusculas é ${nome.toLowerCase()}<br>`) // transformar em Min