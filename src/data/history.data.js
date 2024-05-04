const History = require("../models/history");

class HistoryData {
    histories = [];

    constructor() {
        this.histories = [
            new History(130, 42.001, 29.001, 90, 40, new Date().toISOString()),
            new History(131, 42.002, 29.002, 40, 30, new Date().toISOString()),
            new History(132, 42.003, 29.003, 60, 20, new Date().toISOString()),
            new History(133, 42.004, 29.004, 120, 50, new Date().toISOString()),
            new History(134, 42.005, 29.005, 150, 60, new Date().toISOString()),
            new History(135, 42.006, 29.006, 170, 70, new Date().toISOString()),
        ];
    }

    getAll() {
        return this.histories;
    }
}

module.exports = new HistoryData();