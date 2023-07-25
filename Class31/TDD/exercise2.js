const loguear = (user, password) => {
    if(!password) {
        return "No se ha proporcionado un password";
    } else if(!user) {
        return 'No se ha proporcionado un usuario';
    } else if(password !== '1234') {
        return 'Contraseña incorrecta';
    } else if(user !== 'coderUser') {
        return 'Credenciales incorrectas';
    } else 
        return 'Logueado';
}

let testPasados = 0;
let testTotales = 5;

// Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)
const resultadoTest1 = loguear('coderUser', '');
if(resultadoTest1 === 'No se ha proporcionado un password') {
    console.log('Test 1: Correcto');
    testPasados++;
} else {
    console.log(`Test 1: Incorrecto, se recibio ${resultadoTest1} y se esperaba no se ha proporcionado un password`);
}

// Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)
const resultadoTest2 = loguear('', '1234');
if(resultadoTest2 === 'No se ha proporcionado un usuario') {
    console.log('Test 2: Correcto');
    testPasados++;
} else {
    console.log(`Test 2: Incorrecto, se recibio ${resultadoTest2} y se esperaba no se ha proporcionado un usuario`);
}

// Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)
const resultadoTest3 = loguear('coderUser', 'abcd');
if(resultadoTest3 === 'Contraseña incorrecta') {
    console.log('Test 3: Correcto');
    testPasados++;
} else {
    console.log(`Test 3: Incorrecto, se recibio ${resultadoTest3} y se esperaba contraseña incorrecta`);
}

// Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)
const resultadoTest4 = loguear('pepito', '1234');
if(resultadoTest4 === 'Credenciales incorrectas') {
    console.log('Test 4: Correcto');
    testPasados++;
} else {
    console.log(`Test 4 Incorrecto, se recibio ${resultadoTest4} y se esperaba credenciales incorrectas`) 
}    
// Si  el usuario y contraseña coinciden, consologuear (“logueado”)
const resultadoTest5 = loguear('coderUser', '1234');
if(resultadoTest5 === 'Logueado') {
    console.log('Test 5: Correcto');
    testPasados++;
} else {
    console.log(`Test 5: Incorrecto, se recibio ${resultadoTest5} y se esperaba contraseña incorrecta`)
}

if (testPasados === testTotales) console.log('Pruebas pasadas');
else console.log(`Se pasaron ${testPasados} tests de un total de ${testTotales}`);