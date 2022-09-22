class Tamagotchi {
    constructor(name, happiness = 0, hunger = 10) {
        this.name = name;
        this.happiness = happiness
        this.hunger = hunger
    }
}

function createTamagotchi() {
    const name = prompt("What would you like to name your Tamagotchi?")
    const Tamagotchi = new Tamagotchi(name)
}

console.log(createTamagotchi);