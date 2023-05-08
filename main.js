
function calcular(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var resultado = document.getElementById("resultado");
    var division = num1/num2;
resultado.innerHTML = division
}
