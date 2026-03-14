var num = parseFloat(window.prompt("Escolha um número para ver a tabuada até 10 vezes:"));
console.log("Tabuada do " + num + ":");
for (var i = 1; i <= 10; i++) {
    var resultado = num * i;
    console.log(num + " x " + i + " = " + resultado);
    document.writeln(`<b>${resultado}<b>`)
}
