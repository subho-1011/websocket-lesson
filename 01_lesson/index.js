const ws = require("ws");
const server = new ws.Server({ port: 3000 });

server.on("connection", (socket) => {
    socket.on("message", (message) => {
        const data = Buffer.from(message);
        console.log("Received:", data.toString());
        socket.send(`${message}`);
    });
});
