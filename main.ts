RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    RingbitCar.freestyle(100, 100)
    basic.pause(1000)
    RingbitCar.back()
    basic.pause(200)
    RingbitCar.forward()
})
basic.forever(function () {
    basic.showString("TaeHoon BAKBAKE")
})
