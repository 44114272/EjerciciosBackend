const numeros = {}

for (let i = 0; i < 10000; i++) {
    const randomNumber = Math.round(Math.random() * 20);
    if(numeros[randomNumber]){
        numeros[randomNumber] += 1;
    } else {
        numeros[randomNumber] = 1
    }
}
console.log(numeros);










