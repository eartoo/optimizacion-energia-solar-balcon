// Calculadora simple de ahorro para kits solares
function calcularAhorro(potenciaW, horasSol, precioKwh) {
    const produccionDiaria = (potenciaW * horasSol) / 1000;
    const ahorroDiario = produccionDiaria * precioKwh;
    return ahorroDiario.toFixed(2);
}

console.log("Ahorro estimado por día: " + calcularAhorro(400, 5, 0.20) + "€");
