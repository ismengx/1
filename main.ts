pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        pins.digitalWritePin(DigitalPin.P9, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
})
