module.exports = class History {
    id;
    latitude;
    longitude;
    direction;
    speed;
    time;
    
    constructor(
        id,
        latitude,
        longitude,
        direction,
        speed,
        time,
    ) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.direction = direction;
        this.speed = speed;
        this.time = time;
    }
}