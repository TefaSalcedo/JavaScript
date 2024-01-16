
document.addEventListener("DOMContentLoaded", function () {
    // Espera a que se cargue el DOM antes de ejecutar el siguiente código

    // Obtén referencias a los elementos del DOM
    // botones
    const botonSumar = document.getElementById("boton");
    const botonRestar=document.getElementById("boton01");
    const botonMultiplicar=document.getElementById("boton02");
    const botonDividir=document.getElementById("boton03");
    const botonReset=document.getElementById("boton04");
    // Texto
    const resultadoP = document.querySelector(".text");

    // Agrega un evento de clic al botón
    botonSumar.addEventListener("click", function () {
        // valores
        const valores=obtenerValores()
        const n1 = parseFloat(valores[0]);
        const n2 = parseFloat(valores[1]);

        resultadoP.textContent = `Resultado: ${n1} + ${n2} : ${sumar(n1, n2)}`;
    });
    botonRestar.addEventListener("click", function () {
        const valores=obtenerValores()
        const n1 = parseFloat(valores[0]);
        const n2 = parseFloat(valores[1]);
        resultadoP.textContent = `Resultado: ${n1} - ${n2} : ${restar(n1, n2)}`;
    });
    botonMultiplicar.addEventListener("click", function () {
        const valores=obtenerValores()
        const n1 = parseFloat(valores[0]);
        const n2 = parseFloat(valores[1]);
        resultadoP.textContent = `Resultado: ${n1} * ${n2} : ${multiplicar(n1, n2)}`;
    });
    botonDividir.addEventListener("click", function () {
        const valores=obtenerValores()
        const n1 = parseFloat(valores[0]);
        const n2 = parseFloat(valores[1]);
        resultadoP.textContent = `Resultado: ${n1} / ${n2} : ${dividir(n1, n2)}`;
    });
    botonReset.addEventListener("click", function () {
        const inputNum1 = document.getElementById("num1");
        const inputNum2 = document.getElementById("num2");
        // Establece el valor de los input a 0
        inputNum1.value = 0;
        inputNum2.value = 0;
        resultadoP.textContent = "Resultado:";
    });    
});
function obtenerValores(){
    return [document.getElementById("num1").value,document.getElementById("num2").value]
}

function sumar(n1,n2){
    return(n1+n2)
}
function restar(n1,n2){
    return(n1-n2)
}
function multiplicar(n1,n2){
    return(n1*n2)
}
function dividir(n1,n2){
    return(n1/n2)
}