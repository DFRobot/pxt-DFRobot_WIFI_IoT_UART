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