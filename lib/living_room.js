const Decor = require('./lamp')

const powerEvents = require('./power')

const myLamp = new Decor(10)

myLamp.turnOn()

console.log(`myLamps current brightness: ${myLamp.currentBrightness}`)

powerEvents.surge(myLamp)
powerEvents.outage(myLamp)

myLamp.turnOn()
console.log(`myLamps current brightness: ${myLamp.currentBrightness}`)
