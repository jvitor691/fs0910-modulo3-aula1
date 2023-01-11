// document.write("<h1>Hello World</h1>");

// document.getElementById("container").innerHTML = "<h1>Hello World da esquerda</h1>";
// document.querySelector("#container").innerHTML = "<h2>Outra coisa</h2>";

// let paragrafo = document.createElement("p");
// paragrafo.append("Inserido com Append()");
// document.getElementById("container").appendChild(paragrafo);

function somar()
{
    let resultado = Number(valor1.value) + Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é: "+resultado+"</h4>";
}

function subtrair()
{
    let resultado = Number(valor1.value) - Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é: "+resultado+"</h4>";
}

function multiplicar()
{
    let resultado = Number(valor1.value) * Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é: "+resultado+"</h4>" 
}

function dividir()
{
    let resultado = Number(valor1.value) / Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é: "+resultado+"</h4>"
}
