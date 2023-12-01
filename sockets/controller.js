const socketController = (socket) => {
	socket.on("disconnect", () => {
		console.log("Cliente desconectado", socket.id);
	});

	socket.on("enviar-mensaje", (payload, callback) => {
		socket.broadcast.emit("enviar-mensaje", payload.mensaje);
	});
};

module.exports = {
	socketController,
};
