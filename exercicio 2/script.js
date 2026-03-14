var escolhaj = window.prompt("Escolha entre pedra, papel ou tesoura");
var escolha = Math.floor(Math.random() * 3);
console.log(escolha);
var escolhac = escolha;
if (escolha == 0){
    escolhac = "pedra";
}else if (escolha == 1){
    escolhac = "papel";
}else{
    escolhac = "tesoura";
}
console.log("Sua escolha foi: " + escolhaj);
console.log("A escolha do computador foi: " + escolhac);
if (escolhaj === escolhac) {
    window.alert("Deu empate");
}else if (
    (escolhaj === "pedra" && escolhac === "tesoura") ||
    (escolhaj === "papel" && escolhac === "pedra") ||
    (escolhaj === "tesoura" && escolhac === "papel")
) {
    window.alert("Você ganhou!");
}else if (
    escolhaj === "pedra" ||
    escolhaj === "papel" ||
    escolhaj === "tesoura"
) {
    window.alert("O computador ganhou!");
}else if (
    escolhaj != "pedra" ||
    escolhaj != "papel" ||
    escolhaj != "tesoura"
){
    window.alert("A escolha do jogador foi inválida!");
}


