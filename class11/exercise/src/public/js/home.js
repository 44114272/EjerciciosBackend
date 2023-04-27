const socket = io();

const input = document.getElementById('textbox');
const log = document.getElementById('log');

// input.addEventListener('keyup', evt => {
//     const {key} = evt;
//     evt.target.value = '';
//     socket.emit('message1', key);
// })

// socket.on('log', data => {
//     log.innerHTML+=data;
// })

// second part

input.addEventListener('keyup', e => {
    if(e.key === "Enter") {
        socket.emit('message2', input.value);
        input.value = '';
    }
})

socket.on('log', data => {
    let logs = '';
    data.logs.forEach(log => {
        logs += `${log.socketId} dice: ${log.message}<br/>`
    })
    log.innerHTML = logs;
})