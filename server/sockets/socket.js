const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado.', client.client.id);

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('user:info', (data, callback) => {
        console.log(data);

        client.broadcast.emit('user:info', data);
        /* if (data.id) {
            callback({ status: true, message: 'Parámetros completos' });
        } else {
            callback({ status: false, message: 'Parámetros incompletos, falta el id' });
        } */
    });

    client.emit('user:info', {
        name: 'Administrador',
        message: `Bienvenido ${client.client.id}`
    });

});