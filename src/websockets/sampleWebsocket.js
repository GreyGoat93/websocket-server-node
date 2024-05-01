const ws = require("ws");
const WebsocketClientService = require("../services/websocketClientService");

const WS_SERVER_PORT = 8008;

module.exports = class SampleWebsocket {
    clientService = new WebsocketClientService(true);

    /**
     * @type {number}
     */
    sendDataInterval;

    constructor() {
        this.wss = new ws.WebSocketServer({
            port: WS_SERVER_PORT,
        });

        this.wss.on("connection", (ws) => {
            const addedClient = this.clientService.addClient(ws);

            ws.on("close", () => {
                this.clientService.removeClient(addedClient.id);
            });
        });

        // this.sendRandomData();
    }

    sendRandomData() {
        this.sendDataInterval = setInterval(() => {
            this.sendAll(
                "SAMPLE",
                {"a": "b"}
            );
        }, 3000)
    }

    sendAll(type, data) {
        this.clientService.clients.forEach(client => {
            client.connection.send(JSON.stringify({
                type,
                data,
            }));
        })
    }
}