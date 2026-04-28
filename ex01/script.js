let number = prompt("Digite um número: ")
let mensagem = "";

for (let contador = 1; contador <= number; contador ++) {
    mensagem = `${mensagem} ${contador}`
}
alert (mensagem);