var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor.');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor');
});

socket.emit('user:info', {
    id: 1,
    name: 'Irving',
    phone: '1234567890'
}, function(resp) {
    console.log('Respuesta del server: ', resp);
});

socket.on('user:info', function(data) {
    console.log(data);
});