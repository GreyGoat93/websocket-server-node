module.exports = class Vehicle {
    id;
    name;
    identifierNo;
    isOnline;
    lastOnlineDuration;
    speed;
    signalQuality;
    battery;
    latitude;
    longitude;
    lastLocationLatitude;
    lastLocationLongitude;
    lastUpdate;

    constructor(
        id,
        name,
        identifierNo,
        isOnline,
        lastOnlineDuration,
        speed,
        signalQuality,
        battery,
        latitude,
        longitude,
        lastLocationLatitude,
        lastLocationLongitude,
        lastUpdate,
    ) {
        this.id = id;
        this.name = name;
        this.identifierNo = identifierNo;
        this.isOnline = isOnline;
        this.lastOnlineDuration = lastOnlineDuration;
        this.speed = speed;
        this.signalQuality = signalQuality;
        this.battery = battery;
        this.latitude = latitude;
        this.longitude = longitude;
        this.lastLocationLatitude = lastLocationLatitude;
        this.lastLocationLongitude = lastLocationLongitude;
        this.lastUpdate = lastUpdate;
    }

    updateLocation(latitude, longitude) {
        this.latitude = parseFloat(latitude);
        this.longitude = parseFloat(longitude);
    }
}