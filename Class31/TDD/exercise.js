// let suma = (num1, num2) => {
//     if(!num1 || !num2) return 0;

//     if(typeof num1 !== 'number' || typeof num2 !== 'number')
//         return null;
//     const result = num1 + num2;
//     return result
// }

// const suma = (...numeros) => {
//     let resultado = 0;

//     if (numeros.length === 0) return 0;
//     for(let i = 0; i < numeros.length; i++) {
//         if(typeof numeros[i] !== 'number')
//             return null;
        
//         resultado += numeros[i]
//     };
//     return resultado;
// }

const suma = (...numeros) => {
    if(numeros.length === 0) return 0;
    if(!numeros.every((numero) => typeof numero === 'number')) return null;
    return numeros.reduce((a, b) => a + b)
}

let testPasados = 0;
let testTotales = 4;

// la func debe devolver null si parameter no es numero
console.log('Test 1: La funcion debe devolver null si algun parametro no es numerico');

const resultadoTest1 = suma("2", 2);

if (resultadoTest1 === null) {
    console.log('Test 1: correcto');
    testPasados++;
} else {
    console.log(`Test 1: incorrecto, se recibio: ${typeof resultadoTest1} y se esperaba null`);
}

// la func debe devolver 0 si no se pasa parameter

console.log('Test 2: La funcion debe devolver 0 si no se pasa ningun parametro');
const resultadoTest2 = suma();

if (resultadoTest2 === 0) {
    console.log('Test 2: correcto');
    testPasados++;
} else {
    console.log(`Test 2: incorrecto, se recibio: ${typeof resultadoTest2} y se esperaba 0`);
}

// la func debe poder realizar la suma

console.log('Test 3: La funcion debe poder realizar la suma');
const resultadoTest3 = suma(2, 3);

if (resultadoTest3 === 5) {
    console.log('Test 3: correcto');
    testPasados++;
} else {
    console.log(`Test 3: incorrecto, se recibio: ${resultadoTest3} y se esperaba 5`);
}

// la func debe poder realizar la suma con cualquier parametro

console.log('Test 4: La funcion debe poder realizar la suma con cualquier parametro');
const resultadoTest4 = suma(3, 4, 5, 6);

if (resultadoTest4 === 18) {
    console.log('Test 4: correcto');
    testPasados++;
} else {
    console.log(`Test 4: incorrecto, se recibio: ${resultadoTest4} y se esperaba 18`);
}

if (testPasados === testTotales) console.log('Pruebas pasadas');
else console.log(`Se pasaron ${testPasados} tests de un total de ${testTotales}`);