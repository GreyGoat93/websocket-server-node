const ws = require("ws");
const WebsocketClientService = require("../services/websocketClientService");
const vehiclesData = require("../data/vehicles.data");
const WebsocketClient = require("../models/websocketClient");

const WS_SERVER_PORT = 8008;

module.exports = class SampleWebsocket {
    static MESSAGE_TYPES = {
        VEHICLE_UPDATED: "VEHICLE_UPDATED",
        SENDING_ALL_VEHICLES: "SENDING_ALL_VEHICLES",
    }

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
            
            this.sendTo(addedClient, SampleWebsocket.MESSAGE_TYPES.SENDING_ALL_VEHICLES, vehiclesData.getVehicles());

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

    /**
     * 
     * @param {WebsocketClient} to 
     * @param {string} type 
     * @param {any} data 
     */
    sendTo(to, type, data) {
        to.connection.send(JSON.stringify({
            type,
            data,
        }))
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