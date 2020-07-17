class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if (this.capacity > this.passengers.length) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        return this.passengers.some(passenger => passenger.isHealthy === false)

    }
    totalFood() {
        let totalFood = 0
        for (let index = 0; index < this.passengers.length; index++) {
            totalFood += this.passengers[index].food;
        }
        return totalFood
    }
}
