// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// Ejercicio
//test "formEuroToDollar"
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected);
})

//test "fromDollarToYen" 
test("One euro should be 156.5 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(3);

    // Si 1 euro son 1.07 dólares, entonces 3.5 dolares deben ser (3 / 1.07) * 156.5
    const expected = (3 / 1.07) * 156.5;
    expect(dollars).toBe(expected);
})

//test "fromYenToPound" 
test("One euro should be 0.87 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(300);

    // Si 1 euro son 156.5 yenes, entonces 300 yenes deben ser (300 / 156.5) * 0.87
    const expected = (300 / 156.5) * 0.87;
    expect(pounds).toBe(expected);
})