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