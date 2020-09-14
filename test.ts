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
