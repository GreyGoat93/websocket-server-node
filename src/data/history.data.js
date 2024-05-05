const History = require("../models/history");

class HistoryData {
    histories = [];

    constructor() {
        const now = new Date();
        const hour = 1000 * 60;

        this.histories = [
            new History(130, 40.854074, 29.301835, 50, 40, new Date(now.getTime() - (hour * 6)).toISOString()),
            new History(131, 40.853755, 29.301271, 50, 10, new Date(now.getTime() - (hour * 5)).toISOString()),
            new History(132, 40.854550, 29.300503, 140, 33, new Date(now.getTime() - (hour * 4)).toISOString()),
            new History(133, 40.855819, 29.299070, 140, 44, new Date(now.getTime() - (hour * 3)).toISOString()),
            new History(134, 40.856138, 29.297541, 120, 10, new Date(now.getTime() - (hour * 2)).toISOString()),
            new History(135, 40.857041, 29.295844, 140, 20, new Date(now.getTime() - (hour * 1)).toISOString()),
        ];
    }

    getAll() {
        return this.histories;
    }
}

module.exports = new HistoryData();