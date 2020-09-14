# Maqueen+

[Maqueen plus is a STEM educational robot for micro:bit. Optimized with better power management and larger capacity power supply, it can be perfectly compatible with Huskylens AI Vision Sensor.](https://www.dfrobot.com/product-2026.html)
## Basic usage

* WiFi connection configuration

```blocks
WiFi_IoT_UART.WIFI_setup(
SerialPin.P1,
SerialPin.P2,
"yourSSID",
"yourPASSWORD"
)
```

* Mqtt connection configuration

```blocks
WiFi_IoT_UART.mqttSetup(
"yourApiKey",
"yourSecretKey",
"yourIotTopic",
WiFi_IoT_UART.SERVERS.China
)
```

* Accessing Easy_IoT using mqtt protocol

```blocks
WiFi_IoT_UART.mqttCallbackUser(function (message) {
    serial.writeLine("" + (message))
})
input.onButtonPressed(Button.A, function () {
    WiFi_IoT_UART.mqttSendMessage("mess")
})
WiFi_IoT_UART.WIFI_setup(
SerialPin.P1,
SerialPin.P2,
"yourSSID",
"yourPASSWORD"
)
WiFi_IoT_UART.mqttSetup(
"yourApiKey",
"yourSecretKey",
"yourIotTopic",
WiFi_IoT_UART.SERVERS.China
)
```

* Accessing IFTTT using HTTP protocol 

```blocks
input.onButtonPressed(Button.A, function () {
    WiFi_IoT_UART.IFTTTSend("", "", "")
})
WiFi_IoT_UART.WIFI_setup(
SerialPin.P1,
SerialPin.P2,
"yourSSID",
"yourPASSWORD"
)
WiFi_IoT_UART.IFTTTConfigura("yourEvent", "yourKey")
```

* Accessing ThingSpeak using HTTP protocol 

```blocks
input.onButtonPressed(Button.A, function () {
    WiFi_IoT_UART.ThingSpeakSend("")
})
WiFi_IoT_UART.WIFI_setup(
SerialPin.P1,
SerialPin.P2,
"yourSSID",
"yourPASSWORD"
)
WiFi_IoT_UART.ThingSpeakConfigura("yourKey")

```

## License

MIT

Copyright (c) 2020, microbit/micropython Chinese community  


## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)
