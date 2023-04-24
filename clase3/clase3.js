// const valores = [1,2,3,4,5];

// const callBack = (valor) => {
//     return valor % 2 === 0 ? valor : 'No es par'
// }

// const nuevosValores = valores.map(callBack);

// console.log(nuevosValores);

// const miFuncionMap = (arreglo,callBack) => {
//     const nuevoArreglo = [];
//     for(let i = 0; i < arreglo.length; i++) {
//         const nuevoValor = callBack(arreglo[i]);
//         nuevoArreglo.push(nuevoValor)
//     }
//     return nuevoArreglo;
// };

// const resultado = miFuncionMap(valores, x => x * 2);
// console.log(resultado);

// const suma = (num, num2) => num + num2;
// const resta = (num, num2) => num - num2; 
// const multiplicacion = (num, num2) => num * num2;
// const divicion = (num, num2) => num / num2;

// const operacion = (num, num2, callBack) => {
//     const resultado = callBack(num, num2);
//     console.log(resultado);
// }
// operacion(2, 5, suma);
// operacion(2, 5, resta);
// operacion(2, 5, multiplicacion);
// operacion(2, 5, divicion);

const division = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        divisor === 0 ? 
            reject('No se puede hacer diviciones por cero') :
            resolve(dividendo / divisor);
    }) 
};
// divicion(6, 0)
// .then(resultado => {
//     console.log(resultado);
// }).catch(error => {
//     console.log(error);
// })

const functionAsync = async () => {
    try{
        const resultado = await division(10, 0)
        console.log(resultado);
    }catch(error) {
        console.log(error);
    }
}
functionAsync()