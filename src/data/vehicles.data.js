const Vehicle = require("../models/vehicle");

class VehiclesData {
    /** @type {Vehicle[]} */
    vehicles = [];

    constructor() {
        this.vehicles = [
            new Vehicle(
                1,
                "AAAAA",
                "1111111111",
                false,
                3600000.0,
                0.0,
                13.0,
                90.0,
                41.00,
                29.00,
                41.00,
                29.00,
                new Date(),
            ),
            new Vehicle(
                2,
                "BBBBB",
                "2222222222",
                false,
                3600000.0,
                0.0,
                13.0,
                90.0,
                41.001,
                29.001,
                41.001,
                29.001,
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