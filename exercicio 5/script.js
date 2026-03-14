var quant = parseFloat(window.prompt("Quantos números você quer na soma:"));
var soma = 0;
var num = 0;
var serie = "";
for (var i = 1; i <= quant; i++) {
    num = num * 10 + 1;
    soma += num;
    if (i === 1) serie += num;
    else serie += " + " + num;
}
document.writeln(`<b>${soma}<b>`)
