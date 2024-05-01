const ws = require("ws");

module.exports = class WebsocketClient {
    id;
    /** @type {ws.WebSocket} */
    connection;

    constructor(id, connection) {
        this.id = id;
        this.connection = connection;
    }
}