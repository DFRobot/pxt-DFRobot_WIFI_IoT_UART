# WiFi IoT UART

[Maqueen plus is a STEM educational robot for micro:bit. Optimized with better power management and larger capacity power supply, it can be perfectly compatible with Huskylens AI Vision Sensor.](https://www.dfrobot.com/product-2026.html)
## Basic usage

* WiFi connection configuration

```blocks
DFRobotWiFiIoTUART.WIFI_setup(
SerialPin.P1,
SerialPin.P2,
"yourSSID",
"yourPASSWORD"
)
```

* Mqtt connection configuration

```blocks
DFRobotWiFiIoTUART.mqttSetup(
"yourApiKey",
"yourSecretKey",
"yourIotTopic",
DFRobotWiFiIoTUART.SERVERS.China
)
```

* Accessing Easy_IoT using mqtt protocol

```blocks
input.onButtonPressed(Button.A, function () {
    DFRobotWiFiIoTUART.mqttSendMessageMore("mess", TOPIC.topic_1)
})
DFRobotWiFiIoTUART.mqttCallbackUserMore(TOPIC.topic_1, function (message) {
    serial.writeLine("" + (message))
})
basic.forever(function () {
    DFRobotWiFiIoTUART.WIFISetup(
    SerialPin.P1,
    SerialPin.P2,
    "yourSSID",
    "yourPASSWORD"
    )
    DFRobotWiFiIoTUART.mqttSetup(
    "yourApiKey",
    "yourSecretKey",
    "yourIotTopic",
    DFRobotWiFiIoTUART.SERVERS.China
    )
})
```

* Accessing IFTTT using HTTP protocol 

```blocks
input.onButtonPressed(Button.A, function () {
    DFRobotWiFiIoTUART.IFTTTSend("Hi", "DFRobot", "2020")
})
basic.forever(function () {
    DFRobotWiFiIoTUART.WIFISetup(
    SerialPin.P1,
    SerialPin.P2,
    "yourSSID",
    "yourPASSWORD"
    )
    DFRobotWiFiIoTUART.IFTTTConfigure("yourEvent", "yourKey")
})
```

* Accessing ThingSpeak using HTTP protocol 

```blocks
input.onButtonPressed(Button.A, function () {
    DFRobotWiFiIoTUART.ThingSpeakSend("2020")
})
basic.forever(function () {
    DFRobotWiFiIoTUART.WIFISetup(
    SerialPin.P1,
    SerialPin.P2,
    "yourSSID",
    "yourPASSWORD"
    )
    DFRobotWiFiIoTUART.ThingSpeakConfigure("yourKey")
})
```

## License

MIT

Copyright (c) 2020, microbit/micropython Chinese community  


## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)
