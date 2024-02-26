// Contenido de app.js 
const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))
// // Exporta la función para usarla en otros archivos 
// // (similar a la palabra clave "export" cuando se usa webpack)
// module.exports = { sum };

// // EJERCICIO
// fromDollarToYen	 monto en dólares	monto equivalente en yenes japoneses
// fromEuroToDollar  monto en euros	    monto equivalente en dólares estadounidenses
// fromYenToPound	 monto en yenes	    monto equivalente en libras esterlinas
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
}
console.log(fromEuroToDollar(8));

// //función exacta "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = (valueInDollar/oneEuroIs["USD"]) * oneEuroIs["JPY"];
    // Retornamos el valor en dólares
    return valueInYen;
}
console.log(fromDollarToYen(5));

//función exacta "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = (valueInYen/oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    // Retornamos el valor en dólares
    return valueInPound;
}
console.log(fromYenToPound(500));

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}
