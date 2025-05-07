import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const allSockets: WebSocket[] = [];

wss.on("connection", (socket: WebSocket) => {
  allSockets.push(socket);
    console.log("user connected")
  socket.on("message", (message) => {
    allSockets.forEach((s) => s.send(message.toString()));
  });
});
