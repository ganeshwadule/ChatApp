"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const allSockets = [];
wss.on("connection", (socket) => {
    allSockets.push(socket);
    console.log("user connected");
    socket.on("message", (message) => {
        allSockets.forEach((s) => s.send(message.toString()));
    });
});
