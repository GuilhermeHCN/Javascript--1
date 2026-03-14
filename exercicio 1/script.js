window.alert("Tente adivinhar um número de 1 a 20");
var rng = Math.floor(Math.random() * 20) + 1;
console.log(rng);
var num = 0;
while (num !== rng){
    let num = window.prompt("Digite o número que você acha que é: ");
    console.log(num);
    if(num > rng){
        window.alert("O número é menor")
    }else if(num < rng){
        window.alert("O número é maior")
    }else{
        window.alert("Você acertou!")
    }
}



