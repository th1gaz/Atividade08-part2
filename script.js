let calculo
let numero1 = parseInt(prompt('Digite um número: '))
let numero2 = parseInt(prompt('Digite outro número: '))
let op = prompt('Digite a operação: ')

if(op == '+'){
    calculo = `O resultado é ${numero1+numero2}`
    document.write(calculo)
}if(op == '-'){
    calculo = `O resultado é ${numero1-numero2}`
    document.write(calculo)
}if(op == '*'){
    calculo = `O resultado é ${numero1*numero2}`
    document.write(calculo)
}if(op == '/'){
    calculo = `O resultado é ${numero1/numero2}`
    document.write(calculo)
}