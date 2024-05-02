const express = require("express");
const cors = require("cors");
const path = require("path");
const SampleWebsocket = require("./src/websockets/sampleWebsocket");
const vehiclesData = require("./src/data/vehicles.data");

const HTTP_SERVER_PORT = 8000;

exports.ws = new SampleWebsocket();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/src/pages/index.html'));
})

app.get("/vehicles", (req, res) => {
    res.sendFile(path.join(__dirname, '/src/pages/vehicles.html'));
})

app.get("/api/vehicles", (req, res) => {
    res.send(vehiclesData.getVehicles());
});

app.put("/api/vehicle/update_location", (req, res) => {
    const id = req.body.id;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const updatedVehicle = vehiclesData.updateVehicleLocation(id, latitude, longitude);

    // this.ws.sendAll("VEHICLE_UPDATED", updatedVehicle);
    this.ws.sendAll(SampleWebsocket.MESSAGE_TYPES.SENDING_ALL_VEHICLES, vehiclesData.getVehicles());

    res.send(updatedVehicle);
})

app.listen(HTTP_SERVER_PORT, () => {
    console.log("listening");
});