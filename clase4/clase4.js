const temporizador = (callback)=> {
    setTimeout(() => {
        callback();
    }, 3000);
};

const operacion = () => console.log('Trabajando no como los zurdos');

console.log('inicio de tareas');

temporizador(operacion);

console.log('FIN');

const counter = () => {
    let count = 1;
    const timer = setInterval(() => {
        count++;
        console.log(count);
        count > 5 && clearInterval(timer);
    },1000);
};

console.log('inicio de tareas');
counter();