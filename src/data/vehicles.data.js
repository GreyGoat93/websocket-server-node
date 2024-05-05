const Vehicle = require("../models/vehicle");

class VehiclesData {
    /** @type {Vehicle[]} */
    vehicles = [];

    constructor() {
        this.vehicles = [
            new Vehicle(
                1,
                "34 IST 3434",
                "1111111111",
                false,
                3600000.0,
                0.0,
                13.0,
                90.0,
                40.892677,
                29.353355,
                40.892677,
                29.353355,
                new Date(),
            ),
            new Vehicle(
                2,
                "34 AAA 3456",
                "2222222222",
                false,
                3600000.0,
                0.0,
                13.0,
                90.0,
                40.856532,
                29.301790,
                40.856532,
                29.301790,
                new Date(),
            ),
        ]
    }

    getVehicles() {
        return this.vehicles;
    }

    updateVehicleLocation(id, latitude, longitude) {
        const vehicle = this.vehicles.find(_vehicle => _vehicle.id == id);

        if(vehicle) {
            vehicle.updateLocation(latitude, longitude);
            return vehicle;
        }

        return null;
    }
}

module.exports = new VehiclesData();