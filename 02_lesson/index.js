import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        // origin: "*",
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500", "http://127.0.0.1:5500"],
    },
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("message", (message) => {
        console.log(message);
        io.emit("message", `${socket.id.toLocaleUpperCase().substring(0, 5)}: ${message}`);
    });
});

httpServer.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
