Bit_IR.onPressEvent(RemoteButton.RIGHT, function () {
    x = 2
})
Bit_IR.onPressEvent(RemoteButton.UP, function () {
    speed += 50
})
/**
 * hier wird die Geschwindigkeit des Motors erniedrigt  -50 bei jedem Tastendruck
 */
Bit_IR.onPressEvent(RemoteButton.DOWN, function () {
    speed += -50
})
Bit_IR.onPressEvent(RemoteButton.LEFT, function () {
    x = 1
})
Bit_IR.onPressEvent(RemoteButton.NUM0, function () {
    x = 10
})
/**
 * 1 Gleichstrommotor mit einer IR-Fernbedienung steuern. Vor  und Rück, sowie langsam schnell mit tippen von Up  down auf dem Steuerkreuz.
 * 
 * Hardware TRUE Component 2H-Brücken.
 */
let x = 0
led.enable(false)
pins.digitalWritePin(DigitalPin.P14, 1)
Bit_IR.init(Pins.P3)
let speed = 400
basic.forever(function () {
    if (x == 1) {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
    if (x == 2) {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
    if (x == 3) {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
    if (x == 10) {
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
