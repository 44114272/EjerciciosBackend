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
