// const taxes = {
//     tax1: 12,
//     tax2: 5,
//     tax3: 32
// }

// const onlyValues = Object.values(taxes);

// const totalTaxes = onlyValues.reduce((initialV, newV) => initialV + newV)

// console.log(totalTaxes);

// const object = {
//     prop1: 2,
//     prop2: 'b',
//     prop3: true,
// }
// const object2 = {
//     prop4: 'c',
//     prop5: [1,2,3,4],
// }

// const totalObject = {
//     ...object,
//     ...object2
// }
// console.log(totalObject);

// const object3 = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// const {a, ...rest} = object3; 
// console.log(a);
// console.log(rest);


// const objects =  [
//     {
//         manzanas:3,
//         peras:2,
//         carne:1,
//         jugos:5,
//         dulces:2
//     },
//     {
//         manzanas:1,
//         sandias:1,
//         huevos:6,
//         jugos:1,
//         panes:4
//     }
// ]

// let newArray = [];
// let total;

// objects.forEach(obj => {
//     const keys = Object.keys(obj);
//     const values = Object.values(obj);

//     keys.forEach(key=> {
//         if(!newArray.includes(key)) newArray.push(key);
//     })

//     total = values.reduce((initialValue, totalValue) => initialValue + totalValue);
// })

// console.log(newArray);
// console.log(total);


class TicketManager {
    #precioBaseDeGanancia =  0.15;

    constructor(){
        this.eventos = [];
    }

    getEventos = () => {
        return this.eventos
    }

    agregarEvento = (
        nombre, lugar, precio, capacidad = 50, 
        fecha = new Date().toLocaleDateString()
    ) => {
        const evento = {
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes: []
        };

        if (this.eventos.length === 0) {
            evento.id = 1;
        } else {
            evento.id = this.eventos[this.eventos.length - 1].id + 1; 
        }

        this.eventos.push(evento);
    }
    
    agregarUsuario = (idEvento, idUsuario) => {
        const eventoIndex = 
            this.eventos.findIndex(evento => evento.id === idEvento);
    
        if(eventoIndex === -1) {
            console.log('Evento no encontrado');
            return;
        }

        const usuarioRegistrado = 
            this.eventos[eventoIndex].participantes.includes(idUsuario);

        if(usuarioRegistrado) {
            console.log('Usuario ya registrado');
            return;
        }

        this.eventos[eventoIndex].participantes.push(idUsuario);
    }
}

const manejadorDeEventos = new TicketManager();
manejadorDeEventos.agregarEvento('Evento Jappos Trap', 'Argentina', 200);
manejadorDeEventos.agregarEvento('Evento Jappos Trap 2', 'España', 340);
manejadorDeEventos.agregarUsuario(1, 30);
manejadorDeEventos.agregarUsuario(2, 12);
console.log(manejadorDeEventos.getEventos());
