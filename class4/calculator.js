const suma = (num, num2) => {
    return new Promise((res,rej) => {
        num === 0 || num2 === 0 ? 
        rej('Operacion innecesaria') :
        num + num2 < 0 ? 
            rej('La calculadora solo retorna valores positivos') :
        res(num + num2)
    })
}
const resta = (num, num2) => {
    return new Promise((res,rej) => {
        num === 0 || num2 === 0 ? 
        rej('Operacion invalida') : 
        num - num2 < 0 ? rej('La calculadora retorna solo valores positivos') :
        res(num - num2)
    })
}

const multiplicacion = (num, num2) => {
    return new Promise((res,rej) => {
        num === 0 || num2 === 0 ? 
        rej('Operacion invalida') : 
        num * num2 < 0 ? rej('La calculadora retorna solo valores positivos') :
        res(num * num2)
    })
}

const division = (dividendo, divisor) => {
    return new Promise((res, rej) => {
        divisor === 0 ? 
            rej('No se puede hacer diviciones por cero') :
            res(dividendo / divisor);
    }) 
};

const calculos = async () => {
    try {
        const num = 5;
        const num2  = -2;

        console.log(await suma(num, num2));
        console.log(await resta(num, num2));
        console.log(await multiplicacion(num, num2));
        console.log(await division(num, num2));

    } catch (error) {
        console.log(error);
    }
}
calculos()