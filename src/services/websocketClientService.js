const { WebSocketServer } = require("ws");
const WebsocketClient = require("../models/websocketClient");

module.exports = class WebsocketClientService {
    lastId = 0;

    /**
     * @type {WebsocketClient[]}
     */
    clients = [];

    debugPrintEnabled = false;

    constructor(debugPrintEnabled = false) {
        this.debugPrintEnabled = debugPrintEnabled;
    }

    /**
     * 
     * @param {WebSocketServer} ws 
     * @returns 
     */
    addClient(ws) {
        const client = new WebsocketClient(++this.lastId, ws);
        this.clients.push(client);

        if(this.debugPrintEnabled) {
            console.log("New client ID: " + client.id);
            this.logCurrentIds();
        }

        return client;
    }

    removeClient(clientId) {
        this.clients = this.clients.filter(_client => _client.id !== clientId);

        if(this.debugPrintEnabled) {
            console.log("Client disconnected ID: " + clientId);
            this.logCurrentIds();
        }
    }

    logCurrentIds() {
        console.log("Current IDs: " + this.clients.map(val => val.id));
    }
}