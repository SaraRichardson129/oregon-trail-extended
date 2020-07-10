class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        return this.food += 2
    }
    eat() {
        if (this.food <= 0) {
            return this.isHealthy = false
        } else {
            return this.food -= 1
        }
    }
}

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
        if (this.passengers === this.isHealthy) {
            return false
        } else {
            return true
        }
    }
    totalFood() {
        let totalFood = 0
        for (let index = 0; index < this.passengers.length; index++) {
            const totalPassengers = this.passengers[index].food;
            return totalPassengers + totalFood
        }
    }
}