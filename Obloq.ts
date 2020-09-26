/*！
 * @file Obloq/Obloq.ts
 * @brief DFRobot's obloq makecode library.
 * @n [Get the module here](http://www.dfrobot.com.cn/goods-1577.html)
 * @n Obloq is a serial port of WIFI connection module, Obloq can connect 
 *    to Microsoft Azure IoT and other standard MQTT protocol IoT.
 *
 * @copyright	[DFRobot](http://www.dfrobot.com), 2016
 * @copyright	GNU Lesser General Public License
 *
 * @author [email](jie.tang@dfrobot.com)
 */


//debug
const OBLOQ_DEBUG = false
const OBLOQ_MQTT_DEFAULT_SERVER = true
//DFRobot easy iot
const OBLOQ_MQTT_EASY_IOT_SERVER_CHINA = "iot.dfrobot.com.cn"
const OBLOQ_MQTT_EASY_IOT_SERVER_GLOBAL = "api.beebotte.com"
const OBLOQ_MQTT_EASY_IOT_SERVER_EN = "iot.dfrobot.com"
const OBLOQ_MQTT_EASY_IOT_SERVER_TK = "api.thingspeak.com"
const OBLOQ_MQTT_EASY_IOT_PORT = 1883
//other iot
const OBLOQ_MQTT_USER_IOT_SERVER = "---.-----.---"
const OBLOQ_MQTT_USER_IOT_PORT = 0
//topic max number
const OBLOQ_MQTT_TOPIC_NUM_MAX = 5
//wrong type
const OBLOQ_ERROR_TYPE_IS_SUCCE = 0
const OBLOQ_ERROR_TYPE_IS_ERR = 1
const OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT = -1
const OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE = -2
const OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT = -3
const OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT = -4
const OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE = -5
const OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE = -6
//data type
const OBLOQ_STR_TYPE_IS_NONE = ""
const OBLOQ_BOOL_TYPE_IS_TRUE = true
const OBLOQ_BOOL_TYPE_IS_FALSE = false
const OBLOQ_WEBHOOKS_URL = "maker.ifttt.com"
//topics name
enum TOPIC {
    topic_0 = 0,
    topic_1 = 1,
    topic_2 = 2,
    topic_3 = 3,
    topic_4 = 4
}



/**
 *Obloq implementation method.
 */
//% weight=10 color=#e7660b icon="\uf1eb" block="DFRobot WIFI I0T UART"
namespace DFRobotWiFiIoTUART {

    //serial
    let OBLOQ_SERIAL_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_SERIAL_TX = SerialPin.P2
    let OBLOQ_SERIAL_RX = SerialPin.P1
    //wifi
    let OBLOQ_WIFI_SSID = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WIFI_PASSWORD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WIFI_IP = "0.0.0.0"
    //mqtt//*
    let OBLOQ_MQTT_PORT = 0
    let OBLOQ_MQTT_SERVER = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_MQTT_PWD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_MQTT_ID = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_MQTT_TOPIC = [["x", "false"], ["x", "false"], ["x", "false"], ["x", "false"], ["x", "false"]]
    //http
    let OBLOQ_HTTP_IP = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_HTTP_PORT = 8080
    let OBLOQ_HTTP_BUSY = OBLOQ_BOOL_TYPE_IS_FALSE
    //state
    let OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_TRUE
    let OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
    //callback
    let OBLOQ_MQTT_CB: Action[] = [null, null, null, null, null]
    //commands
    let OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
    let OBLOQ_WRONG_TYPE = OBLOQ_STR_TYPE_IS_NONE
    //animation
    let OBLOQ_WIFI_ICON = 1
    let OBLOQ_MQTT_ICON = 1
    //event
    let OBLOQ_MQTT_EVENT = OBLOQ_BOOL_TYPE_IS_FALSE
    //mode
    let OBLOQ_WORKING_MODE_IS_MQTT = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WORKING_MODE_IS_HTTP = OBLOQ_BOOL_TYPE_IS_FALSE
    let OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_TRUE


    let OBLOQ_WEBHOOKS_KEY = ""
    let OBLOQ_WEBHOOKS_EVENT = ""
    let microIoT_WEBHOOKS_KEY = ""
    let microIoT_WEBHOOKS_EVENT = ""
    let microIoT_THINGSPEAK_KEY = ""
    let OBLOQ_MQTT_EASY_IOT_SIOT = ""
    let microIoT_BEEBOTTE_Token = ""
    let G_city = 0;
    export enum SERVERS {
        //% blockId=SERVERS_China block="EasyIOT_CN"
        China,
        //% blockId=SERVERS_English block="EasyIOT_EN"
        English,
        //% blockId=SERVERS_Siot block="Siot"
        Siot
    }

    export class PacketaMqtt {
        /**
         * Obloq receives the message content.
         */
        public message: string;
    }


    //% advanced=true shim=Obloq::obloqSetTxBufferSize
    function obloqSetTxBufferSize(size: number): void {
        return
    }

    //% advanced=true shim=Obloq::obloqSetRxBufferSize
    function obloqSetRxBufferSize(size: number): void {
        return
    }

    //% advanced=true shim=Obloq::obloqEventOn
    function obloqEventOn(): void {
        return
    }

    //% advanced=true shim=Obloq::obloqClearRxBuffer
    function obloqClearRxBuffer(): void {
        return
    }

    //% advanced=true shim=Obloq::obloqClearTxBuffer
    function obloqClearTxBuffer(): void {
        return
    }

    //% advanced=true shim=Obloq::obloqforevers
    function obloqforevers(a: Action): void {
        return
    }

    function obloqWriteString(text: string): void {
        serial.writeString(text)
    }

    /**
     * Two parallel stepper motors are executed simultaneously(DegreeDual).
     * @param SSID to SSID ,eg: "yourSSID"
     * @param PASSWORD to PASSWORD ,eg: "yourPASSWORD"
     * @param receive to receive ,eg: SerialPin.P1
     * @param send to send ,eg: SerialPin.P2
    */
    //% weight=100
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% blockId=WiFi_IoT_UART_WIFI_setup
    //% block="Wi-Fi configure|Pin set:|receiving data (green wire): %receive|sending data (blue wire): %send|Wi-Fi:|name: %SSID|password: %PASSWORD|start connection"
    export function WIFISetup(/*serial*/receive: SerialPin, send: SerialPin,
                                     /*wifi*/SSID: string, PASSWORD: string,
        /*EVENT: string, KEY: string*/):
        void {
        OBLOQ_WIFI_SSID = SSID
        OBLOQ_WIFI_PASSWORD = PASSWORD
        OBLOQ_SERIAL_TX = send
        OBLOQ_SERIAL_RX = receive
        Obloq_serial_init()
        Obloq_start_connect_http()
    }
    /**
     * Two parallel stepper motors are executed simultaneously(DegreeDual).
     * @param SSID to SSID ,eg: "yourSSID"
     * @param PASSWORD to PASSWORD ,eg: "yourPASSWORD"
     * @param API_KEY to API_KEY ,eg: "yourApiKey"
     * @param SECRET_KEY to SECRET_KEY ,eg: "yourSecretKey"
     * @param IOT_TOPIC to IOT_TOPIC ,eg: "yourIotTopic"
     * @param receive to receive ,eg: SerialPin.P1
     * @param send to send ,eg: SerialPin.P2
    */
    //% weight=99
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% SERVER.fieldEditor="gridpicker" SERVER.fieldOptions.columns=2
    //% blockId=WiFi_IoT_UART_mqtt_setup
    //% block="MQTT configure|IOT_ID(user):%IOT_ID|IOT_PWD(password):%IOT_PWD|Topic(default topic_0):%IOT_TOPIC|server:%SERVERS||IP:%IP"
    export function mqttSetup(/*mqtt*/API_KEY: string, SECRET_KEY: string, IOT_TOPIC: string, SERVER: SERVERS, IP?: string):
        void {
        //OBLOQ_WIFI_SSID = SSID
        // OBLOQ_WIFI_PASSWORD = PASSWORD
        OBLOQ_MQTT_PWD = SECRET_KEY
        OBLOQ_MQTT_ID = API_KEY
        OBLOQ_MQTT_TOPIC[0][0] = IOT_TOPIC
        OBLOQ_MQTT_EASY_IOT_SIOT = IP
        //OBLOQ_SERIAL_TX = send
        //OBLOQ_SERIAL_RX = receive
        Obloq_serial_init()
        Obloq_start_connect_mqtt(SERVER, "connect wifi")
    }
    /**
     * ThingSpeak configuration
     * @param KEY to KEY ,eg: "yourKey"
     */
    //% weight=96
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% blockId=WiFi_IoT_UART_ThingSpeak_configura
    //% block="ThingSpeak configure key: %KEY"
    export function ThingSpeakConfigure(KEY: string): void {
        microIoT_THINGSPEAK_KEY = KEY
    }
    /**
    * ThingSpeak configured and sent data
    * @param field1 ,eg: 2020
    */
    //% weight=95
    //% blockId=WiFi_IoT_UART_ThingSpeak_Send
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    //% block="ThingSpeak send value1: %field1||value2: %field2|value3: %field3|value4: %field4|value5: %field5|value6: %field6|value7: %field7 value8: %field8" 
    export function ThingSpeakSend(field1: string, field2?: string, field3?: string, field4?: string, field5?: string, field6?: string, field7?: string, field8?: string): void {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            //return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|1|http://" + OBLOQ_MQTT_EASY_IOT_SERVER_TK + "/update?api_key=" + microIoT_THINGSPEAK_KEY + "&field1=" + field1 + "&field2=" + field2 + "&field3=" + field3 + "|\r")

        //return Obloq_http_wait_request(time)
    }
    /**
     * IFTTT configuration
     * @param EVENT to EVENT ,eg: "yourEvent"
     * @param KEY to KEY ,eg: "yourKey"
    */
    //% weight=94
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% blockId=WiFi_IoT_UART_IFTTT_Configura
    //% block="IFTTT configure|event: %EVENT|key: %KEY"
    export function IFTTTConfigure(EVENT: string, KEY: string): void {
        microIoT_WEBHOOKS_EVENT = EVENT;
        microIoT_WEBHOOKS_KEY = KEY;
    }
     /**
     * IFTTT send data
     * time(ms): private long maxWait
     * @param value1 ,eg: Hi
     * @param value2 ,eg: DFRobot
     * @param value3 ,eg: 2020
    */
    //% weight=93
    //% blockId=WiFi_IoT_UART_IFTTT_Send
    //% inlineInputMode=inline
    //% block="IFTTT send value1 %value1| value2 %value2| value3 %value3"
    export function IFTTTSend(value1: string, value2: string, value3: string): void {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            //return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|2|http://" + OBLOQ_WEBHOOKS_URL + "/trigger/" + OBLOQ_WEBHOOKS_EVENT + "/with/key/" + OBLOQ_WEBHOOKS_KEY + ",{\"value1\":\"" + value1 + "\",\"value2\":\"" + value2 + "\",\"value3\":\"" + value3 + "\" }" + "|\r")
        let ret = Obloq_http_wait_request(10000)
        if (ret == "Congratulations! You've fired the testObloq event") {
            ret = "OK"
        }
        //return ret
    }
    /**Beebotte Configure 
     * @param token ,eg: Your Channel Token
     */
    //%weight=92
    //%blockID=WiFi_IoT_UART_BeeBotte_Configura block="BeeBotte configura key: %token "
    export function token(token:string):void{
        microIoT_BEEBOTTE_Token = token;
    }
    /**BeeBotte send data
     * @param channel ,eg: Your Channel Name
     * @param resource ,eg: Your Resource Name
     * @param data ,eg: Send Message
     */
     //%weight=91
    //%blockID=WiFi_IoT_UART_BeeBotte_sendmessage block="BeeBotte Channel: %channel Resource: %resource send value %data "
    export function sendmessage(channel:string, resource:string, data:string){
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            //return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|2|http://" + OBLOQ_MQTT_EASY_IOT_SERVER_GLOBAL + "/v1/data/write/" + channel + "/" + resource + "?token=" + microIoT_BEEBOTTE_Token +",{\"data\":" + data + "}\r\n|\r");
        let ret = Obloq_http_wait_request(10000)
        if (ret == "Congratulations! You've fired the testObloq event") {
            ret = "OK"
        }
    }
    
    function Obloq_mark_reset(type: string): void {
        if (type == "wifi") {
            OBLOQ_WIFI_IP = "0.0.0.0"
            OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_TRUE
            OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_FALSE
        }
        OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
        OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_FALSE
        OBLOQ_WIFI_ICON = 1
        OBLOQ_WIFI_ICON = 1
        for (let i = 0; i < OBLOQ_MQTT_TOPIC_NUM_MAX; i++) {
            OBLOQ_MQTT_TOPIC[i][1] = "false";
        }
        led.stopAnimation()
        basic.clearScreen()
    }

    function Obloq_serial_init(): void {
        let item = OBLOQ_STR_TYPE_IS_NONE
        //First send data through usb, avoid the first data scrambled.
        obloqWriteString("123")
        
        item = serial.readString()
        item = serial.readString()
        item = serial.readString()
        
        serial.redirect(
            OBLOQ_SERIAL_TX,
            OBLOQ_SERIAL_RX,
            BaudRate.BaudRate9600
        ) 
        obloqSetTxBufferSize(300)
        obloqSetRxBufferSize(300)
        obloqWriteString("\r")
        
        item = serial.readString()
        OBLOQ_SERIAL_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqClearRxBuffer()
        obloqClearTxBuffer()
        onEvent()
    }

    function Obloq_start_connect_http(): void {
        OBLOQ_WORKING_MODE_IS_HTTP = OBLOQ_BOOL_TYPE_IS_TRUE
        let ret = Obloq_connect_wifi()
        if (OBLOQ_DEBUG) { basic.showNumber(ret) }
        switch (ret) {
            case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                basic.showIcon(IconNames.Yes)
                basic.pause(500)
                basic.clearScreen()
                OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_TRUE
            } break
            case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT: {
                basic.showIcon(IconNames.No)
                basic.pause(500)
                OBLOQ_WRONG_TYPE = "wifi connect timeout"
                return
            } break
            case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE: {
                basic.showIcon(IconNames.No)
                basic.pause(500)
                OBLOQ_WRONG_TYPE = "wifi connect failure"
                return
            } break
            case OBLOQ_ERROR_TYPE_IS_ERR: {
                basic.showNumber(ret)
                basic.showIcon(IconNames.No)
                while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
            } break
        }
        OBLOQ_HTTP_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
    }

    function Obloq_start_connect_mqtt(SERVER: SERVERS, connectStart: string): void {
        OBLOQ_WORKING_MODE_IS_MQTT = OBLOQ_BOOL_TYPE_IS_TRUE
        if (OBLOQ_MQTT_DEFAULT_SERVER) {
            if (SERVER == SERVERS.China) {
                OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_CHINA
            } else if (SERVER == SERVERS.English) {
                OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_EN
            } 
            // else if (SERVERS.Global){
            //     OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_GLOBAL
            // }
            else{
                OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SIOT
            }
            OBLOQ_MQTT_PORT = OBLOQ_MQTT_EASY_IOT_PORT
        } else {
            OBLOQ_MQTT_SERVER = OBLOQ_MQTT_USER_IOT_SERVER
            OBLOQ_MQTT_PORT = OBLOQ_MQTT_USER_IOT_PORT
        }

        let ret = 0
        if (connectStart == "connect wifi") {
            ret = Obloq_connect_wifi()
            if (OBLOQ_DEBUG) { basic.showNumber(ret) }
            switch (ret) {
                case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                    basic.showIcon(IconNames.Yes)
                    basic.pause(500)
                    basic.clearScreen()
                    OBLOQ_WIFI_CONNECTED = OBLOQ_BOOL_TYPE_IS_TRUE
                } break
                case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "wifi connect timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "wifi connect failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_ERR: {
                    basic.showNumber(ret)
                    basic.showIcon(IconNames.No)
                    while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
                } break
            }
        }
        if (connectStart == "connect wifi" || connectStart == "connect mqtt") {
            ret = Obloq_connect_iot();
            switch (ret) {
                case OBLOQ_ERROR_TYPE_IS_SUCCE: {
                    basic.showIcon(IconNames.Yes)
                    basic.pause(500)
                    basic.clearScreen()
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt subtopic timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt subtopic failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt connect timeout"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE: {
                    basic.showIcon(IconNames.No)
                    basic.pause(500)
                    OBLOQ_WRONG_TYPE = "mqtt connect failure"
                    return
                } break
                case OBLOQ_ERROR_TYPE_IS_ERR: {
                    basic.showNumber(ret)
                    basic.showIcon(IconNames.No)
                    while (OBLOQ_BOOL_TYPE_IS_TRUE) { basic.pause(10000) }
                } break
            }
        }
        OBLOQ_MQTT_INIT = OBLOQ_BOOL_TYPE_IS_TRUE
        OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
    }

    basic.forever(() => {
        if (OBLOQ_DEBUG) { led.plot(0, 0) }
        basic.pause(150)
        if ((OBLOQ_WRONG_TYPE == "wifi disconnect") ||
            (OBLOQ_WRONG_TYPE == "wifi connect timeout") ||
            (OBLOQ_WRONG_TYPE == "wifi connect failure") ||
            (OBLOQ_WRONG_TYPE == "mqtt pulish failure") ||
            (OBLOQ_WRONG_TYPE == "mqtt subtopic timeout") ||
            (OBLOQ_WRONG_TYPE == "mqtt subtopic failure") ||
            (OBLOQ_WRONG_TYPE == "mqtt connect timeout") ||
            (OBLOQ_WRONG_TYPE == "mqtt connect failure")) {
            OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_TRUE
            let type = "wifi"//OBLOQ_WRONG_TYPE.substr(0,4)
            Obloq_mark_reset(type)
            if (OBLOQ_DEBUG) { basic.showString(OBLOQ_WRONG_TYPE) }
            if (OBLOQ_WORKING_MODE_IS_MQTT) {
                if (OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_CHINA) {
                    Obloq_start_connect_mqtt(SERVERS.China, "connect " + type)
                } else if (OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_EN) {
                    Obloq_start_connect_mqtt(SERVERS.English, "connect " + type)
                } 
                // else if(OBLOQ_MQTT_SERVER = OBLOQ_MQTT_EASY_IOT_SERVER_GLOBAL) {
                //     Obloq_start_connect_mqtt(SERVERS.Global, "connect " + type)
                // }
                else{
                    Obloq_start_connect_mqtt(SERVERS.Siot, "connect " + type)
                }
                if (OBLOQ_MQTT_INIT) {
                    OBLOQ_WRONG_TYPE = OBLOQ_STR_TYPE_IS_NONE
                    OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
                }
            }
            if (OBLOQ_WORKING_MODE_IS_HTTP) {
                Obloq_start_connect_http()
                if (OBLOQ_HTTP_INIT) {
                    OBLOQ_WRONG_TYPE = OBLOQ_STR_TYPE_IS_NONE
                    OBLOQ_WORKING_MODE_IS_STOP = OBLOQ_BOOL_TYPE_IS_FALSE
                }
            }

        }
        if (OBLOQ_DEBUG) { led.unplot(0, 0) }
        basic.pause(150)
    })

    
   

    /**
     * Two parallel stepper motors are executed simultaneously(DegreeDual).
     * @param IP to IP ,eg: "0.0.0.0"
     * @param PORT to PORT ,eg: 80
    */
    //% weight=50
    //% receive.fieldEditor="gridpicker" receive.fieldOptions.columns=3
    //% send.fieldEditor="gridpicker" send.fieldOptions.columns=3
    //% blockId=WiFi_IoT_UART_http_setup
    //% block=" configure http | ip: %IP| port: %PORT | start connection"
    export function httpSetup(IP: string, PORT: number):
        void {
        OBLOQ_HTTP_IP = IP
        OBLOQ_HTTP_PORT = PORT
    }

    

    /**
     * Disconnect the serial port.
      * @param IOT_TOPIC ,eg: "yourIotTopic"
    */
    //% weight=97
    //% blockId=WiFi_IoT_UART_mqtt_add_topic
    //% block="subscribe additional %top |: %IOT_TOPIC"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    export function mqttAddTopic(top: TOPIC, IOT_TOPIC: string): void {
        OBLOQ_MQTT_TOPIC[top][0] = IOT_TOPIC
        if (!OBLOQ_MQTT_INIT || OBLOQ_WORKING_MODE_IS_STOP) return

        let _timeout = 0
        if (OBLOQ_MQTT_TOPIC[top][0] != "x" && OBLOQ_MQTT_TOPIC[top][1] == "false") {
            subTopic(<string>OBLOQ_MQTT_TOPIC[top][0])
        } else {
            return
        }

        while (_timeout < 1000) {
            if (OBLOQ_ANSWER_CMD == "SubOk") {
                OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                OBLOQ_MQTT_TOPIC[top][1] = "true"
                break
            } else if (OBLOQ_ANSWER_CMD == "SubFailure") {
                OBLOQ_WRONG_TYPE = "mqtt subtopic failure"
                return
            }
            basic.pause(1)
            _timeout += 1
        }
        if (_timeout >= 1000 && OBLOQ_ANSWER_CMD != "SubOk") {
            OBLOQ_WRONG_TYPE = "mqtt subtopic timeout"
        } else {
            OBLOQ_MQTT_TOPIC[top][1] = "true"
        }
    }

    

    /**
     * Get the software version.time(ms): private long maxWait
     * @param time to timeout, eg: 10000
    */
	
    //% weight=10
    //% blockId=WiFi_IoT_UART_get_version
    //% block="get version"
    export function getVersion(): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        let time = 5000
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|1|2|\r")

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if (OBLOQ_ANSWER_CMD == "GetVersion") {
                return OBLOQ_ANSWER_CONTENT
            } else if (OBLOQ_ANSWER_CMD == "timeout") {
                return "timeout"
            }
            basic.pause(100)
            _timeout += 1
            if (_timeout > timeout) {
                if (OBLOQ_ANSWER_CMD != "GetVersion") {
                    return "timeout"
                }
                else {
                    return OBLOQ_ANSWER_CONTENT
                }
            }
        }
        return OBLOQ_STR_TYPE_IS_NONE
    }
   


    function Obloq_connect_wifi(): number {
        if (OBLOQ_WIFI_CONNECTED == OBLOQ_BOOL_TYPE_IS_TRUE) {
            return OBLOQ_ERROR_TYPE_IS_SUCCE
        }

        OBLOQ_WIFI_ICON = 1
        let timeout = 10000  //Set the default timeout period 10s.
        timeout = timeout < 100 ? 100 : timeout //Timeout minimum resolution 100ms

        let timeout_count_max = timeout / 100
        let timeout_count_now = 0
        if (OBLOQ_WIFI_CONNECT_FIRST) {
            //serial init
            if (!OBLOQ_SERIAL_INIT) {
                Obloq_serial_init()
            }
            //show icon
            //Obloq_wifi_icon_display()
            for (let i = 0; i < 3; i++) {
                obloqWriteString("|1|1|\r")
                basic.pause(100)
            }
            obloqWriteString("|2|1|" + OBLOQ_WIFI_SSID + "," + OBLOQ_WIFI_PASSWORD + "|\r") //Send wifi account and password instructions
            OBLOQ_WIFI_CONNECT_FIRST = OBLOQ_BOOL_TYPE_IS_FALSE
        }

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            if ((timeout_count_now + 1) % 3 == 0) {
                //Obloq_wifi_icon_display()
            }
            if (OBLOQ_ANSWER_CMD == "WifiConnected") {
                OBLOQ_WIFI_IP = OBLOQ_ANSWER_CONTENT
                return OBLOQ_ERROR_TYPE_IS_SUCCE
            } else if (OBLOQ_ANSWER_CMD == "WifiConnectFailure") {
                return OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_FAILURE
            }
            basic.pause(100)
            timeout_count_now += 1
            if (timeout_count_now > timeout_count_max) {
                //basic.showIcon(IconNames.No)
                return OBLOQ_ERROR_TYPE_IS_WIFI_CONNECT_TIMEOUT
            }
        }
        return OBLOQ_ERROR_TYPE_IS_ERR
    }

    function Obloq_http_wait_request(time: number): string {
        if (time < 100) {
            time = 100
        }
        let timeout = time / 100
        let _timeout = 0

        while (OBLOQ_BOOL_TYPE_IS_TRUE) {
            basic.pause(100)
            if (OBLOQ_ANSWER_CMD == "200") {//http请求成功
                OBLOQ_ANSWER_CMD = "";
                return OBLOQ_ANSWER_CONTENT //返回消息
            } else if (OBLOQ_ANSWER_CMD == "-1") {//获取数据失败
                Obloq_http_wrong_animation("requestFailed")
                OBLOQ_ANSWER_CMD = "";
                return OBLOQ_STR_TYPE_IS_NONE
            } else if (OBLOQ_ANSWER_CMD == "1") {//http请求字段错误
                Obloq_http_wrong_animation("requestFailed")
                OBLOQ_ANSWER_CMD = "";
                return OBLOQ_STR_TYPE_IS_NONE
            }

            _timeout += 1
            if (_timeout > timeout) {
                Obloq_http_wrong_animation("timeOut")
                return OBLOQ_STR_TYPE_IS_NONE
            }
        }

        return OBLOQ_STR_TYPE_IS_NONE
    }

    function Obloq_http_wrong_animation(wrongType: string): void {
        if (wrongType == "requestFailed") {  //http 请求失败或者字段错误动画
            basic.showIcon(IconNames.No, 10)
            basic.pause(500)
            for (let i = 0; i < 3; i++) {
                basic.clearScreen()
                basic.pause(100)
                basic.showIcon(IconNames.No, 10)
                basic.pause(50)
            }
        } else if (wrongType == "timeOut") { //http 请求超时动画
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `, 10)
            basic.pause(500)
            for (let i = 0; i < 3; i++) {
                basic.clearScreen()
                basic.pause(100)
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . . . .
                    . . # . .
                    `, 10)
                basic.pause(50)
            }
        }
        basic.pause(150)
        basic.clearScreen()
    }

    /**
     * The HTTP get request.url(string):URL:time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */

    //% weight=79
    //% blockId=WiFi_IoT_UART_http_get
    //% block="http(get) | url %url| timeout(ms) %time"
    //% advanced=false
    export function httpGet(url: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|1|http://" + OBLOQ_HTTP_IP + ":" + OBLOQ_HTTP_PORT + "/" + url + "|\r")

        return Obloq_http_wait_request(time)
    }

    /**
     * The HTTP post request.url(string): URL; content(string):content
     * time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    //% weight=78
    //% blockId=WiFi_IoT_UART_http_post
    //% block="http(post) | url %url| content %content| timeout(ms) %time"
    export function httpPost(url: string, content: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|2|http://" + OBLOQ_HTTP_IP + ":" + OBLOQ_HTTP_PORT + "/" + url + "," + content + "|\r")

        return Obloq_http_wait_request(time)
    }

    /**
     * The HTTP put request,Obloq.put() can only be used for http protocol!
     * url(string): URL; content(string):content; time(ms): private long maxWait
     * @param time set timeout, eg: 10000
    */
    //% weight=77
    //% blockId=WiFi_IoT_UART_http_put
    //% block="http(put) | url %url| content %content| timeout(ms) %time"
    export function httpPut(url: string, content: string, time: number): string {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_HTTP_INIT)
            return OBLOQ_STR_TYPE_IS_NONE

        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|3|3|http://" + OBLOQ_HTTP_IP + ":" + OBLOQ_HTTP_PORT + "/" + url + "," + content + "|\r")

        return Obloq_http_wait_request(time)
    }

    function Obloq_connect_mqtt(): void {
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|4|1|1|" + OBLOQ_MQTT_SERVER + "|" + OBLOQ_MQTT_PORT + "|" + OBLOQ_MQTT_ID + "|" + OBLOQ_MQTT_PWD + "|\r")
    }


    function Obloq_connect_iot(): number {
        OBLOQ_MQTT_ICON = 1
        let iconnum = 0
        let _timeout = 0
        let __timeout = 0

        Obloq_connect_mqtt()

        while (_timeout < 1000) {
            if (_timeout % 50 == 0) {
                //Obloq_mqtt_icon_display()
                iconnum += 1;
            }
            if (OBLOQ_ANSWER_CMD == "MqttConneted") {
                break
            } else if (OBLOQ_ANSWER_CMD == "MqttConnectFailure") {
                return OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_FAILURE
            }
            basic.pause(1)
            _timeout += 1

        }
        if (_timeout >= 1000 && OBLOQ_ANSWER_CMD != "MqttConneted") {
            return OBLOQ_ERROR_TYPE_IS_MQTT_CONNECT_TIMEOUT
        }
        for (let i = 0; i < OBLOQ_MQTT_TOPIC_NUM_MAX; i++) {
            if (OBLOQ_MQTT_TOPIC[i][0] != "x" && OBLOQ_MQTT_TOPIC[i][1] == "false") {
                subTopic(<string>OBLOQ_MQTT_TOPIC[i][0])
            } else {
                continue
            }
            __timeout = _timeout + 2000
            while (_timeout < __timeout) {
                if (_timeout % 50 == 0) {
                    //Obloq_mqtt_icon_display()
                    iconnum += 1
                }
                if (iconnum > 3) {//动画一次以上
                    if (OBLOQ_ANSWER_CMD == "SubOk") {
                        OBLOQ_MQTT_TOPIC[i][1] = "true";
                        OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                        break
                    } else if (OBLOQ_ANSWER_CMD == "SubFailure") {
                        return OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_FAILURE
                    }
                }
                basic.pause(1)
                _timeout += 1
            }
            if (_timeout >= __timeout) {
                if (OBLOQ_ANSWER_CMD != "SubOk") {
                    OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                    return OBLOQ_ERROR_TYPE_IS_MQTT_SUBTOPIC_TIMEOUT
                } else {
                    OBLOQ_MQTT_TOPIC[i][1] = "true";
                    OBLOQ_ANSWER_CMD = OBLOQ_STR_TYPE_IS_NONE
                }
            }
        }
        return OBLOQ_ERROR_TYPE_IS_SUCCE
        //basic.showString("ok")
    }

   

   
    /**
     * Send a message.
     * @param top set top, eg: top
     * @param mess set mess, eg: mess
    */
    //% weight=98
    //% blockId=WiFi_IoT_UART_mqtt_send_message_more
    //% block="send message %mess |to %top"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    export function mqttSendMessageMore(mess: string, top: TOPIC): void {
        while (OBLOQ_WORKING_MODE_IS_STOP) { basic.pause(20) }
        if (!OBLOQ_MQTT_INIT) {
            return
        }
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        switch (top) {
            case TOPIC.topic_1: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[1][0] + "|" + mess + "|\r"); break;
            case TOPIC.topic_2: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[2][0] + "|" + mess + "|\r"); break;
            case TOPIC.topic_3: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[3][0] + "|" + mess + "|\r"); break;
            case TOPIC.topic_4: obloqWriteString("|4|1|3|" + OBLOQ_MQTT_TOPIC[4][0] + "|" + mess + "|\r"); break;
        }
    }

    /**
     * Subscribe to a Topic
     * @param top set top, eg: top
    */
    //% weight=67
    //% blockId=WiFi_IoT_UART_subTopic
    //% advanced=true
    function subTopic(topic: string): void {
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        obloqWriteString("|4|1|2|" + topic + "|\r")
    }

    function Obloq_mqtt_callback_more(top: TOPIC, a: Action): void {
        switch (top) {
            case TOPIC.topic_1: OBLOQ_MQTT_CB[1] = a; break;
            case TOPIC.topic_2: OBLOQ_MQTT_CB[2] = a; break;
            case TOPIC.topic_3: OBLOQ_MQTT_CB[3] = a; break;
            case TOPIC.topic_4: OBLOQ_MQTT_CB[4] = a; break;
        }
    }

    function Obloq_mqtt_callback(a: Action): void {
        OBLOQ_MQTT_CB[0] = a
    }


    

    /**
     * This is an MQTT listener callback function, which is very important.
     * The specific use method can refer to "example/ObloqMqtt.ts"
    */
    //% weight=96
    //% blockId=WiFi_IoT_UART_mqtt_callback_user_more block="on received %top"
    //% top.fieldEditor="gridpicker" top.fieldOptions.columns=2
    //% useLoc="Obloq.Obloq_mqtt_callback_user_more"
    export function mqttCallbackUserMore(top: TOPIC, cb: (message: string) => void) {
        Obloq_mqtt_callback_more(top, () => {
            const packet = new PacketaMqtt()
            packet.message = OBLOQ_ANSWER_CONTENT
            cb(packet.message)
        });
    }


    function Obloq_serial_recevice(): void {
        //basic.showString("B")
        let Obloq_message_str = serial.readString()
        let size = Obloq_message_str.length
        let item = Obloq_message_str

        if (item.indexOf("|4|1|1|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttConneted"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|1|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttConnectFailure"
            OBLOQ_ANSWER_CONTENT = item.substr(9, size - 2 - 9)
            return
        } else if (item.indexOf("|4|1|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|2|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubCeiling"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|2|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "SubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|3|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PulishOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|3|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PulishFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            OBLOQ_WRONG_TYPE = "mqtt pulish failure"
            return
        } else if (item.indexOf("|4|1|4|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttDisconnected"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|4|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "MqttDisconnectFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|5|") != -1) {//|4|1|5|topic|message|
            let str = item.substr(7, size - 2 - 7)
            let num = str.indexOf("|")
            OBLOQ_ANSWER_CMD = str.substr(0, num)
            OBLOQ_ANSWER_CONTENT = str.substr(num + 1, str.length - OBLOQ_ANSWER_CMD.length - 1)
            switch (OBLOQ_ANSWER_CMD) {
                case OBLOQ_MQTT_TOPIC[0][0]: { if (OBLOQ_MQTT_CB[0] != null) obloqforevers(OBLOQ_MQTT_CB[0]); } break;
                case OBLOQ_MQTT_TOPIC[1][0]: { if (OBLOQ_MQTT_CB[1] != null) obloqforevers(OBLOQ_MQTT_CB[1]); } break;
                case OBLOQ_MQTT_TOPIC[2][0]: { if (OBLOQ_MQTT_CB[2] != null) obloqforevers(OBLOQ_MQTT_CB[2]); } break;
                case OBLOQ_MQTT_TOPIC[3][0]: { if (OBLOQ_MQTT_CB[3] != null) obloqforevers(OBLOQ_MQTT_CB[3]); } break;
                case OBLOQ_MQTT_TOPIC[4][0]: { if (OBLOQ_MQTT_CB[4] != null) obloqforevers(OBLOQ_MQTT_CB[4]); } break;
            }
            return
        } else if (item.indexOf("|4|1|6|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|6|2|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|4|1|6|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "UnSubFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|1|1|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "PingOk"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|1|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "GetVersion"
            OBLOQ_ANSWER_CONTENT = item.substr(5, size - 2 - 5)//version
            return
        } else if (item.indexOf("|1|3|", 0) != -1) {
            if (OBLOQ_MQTT_INIT) {
                OBLOQ_ANSWER_CMD = "Heartbeat"
                OBLOQ_ANSWER_CONTENT = "OK"
            }
            return
        } else if (item.indexOf("|2|1|", 0) != -1) {
            
            OBLOQ_ANSWER_CMD = "WifiDisconnect"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            if (OBLOQ_MQTT_INIT || OBLOQ_HTTP_INIT || OBLOQ_WIFI_CONNECTED) {
                OBLOQ_WRONG_TYPE = "wifi disconnect"
            }
            return
        } else if (item.indexOf("|2|2|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnecting"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            //serial.writeNumber(12)
            return
        } else if (item.indexOf("|2|3|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnected"
            OBLOQ_ANSWER_CONTENT = item.substr(5, size - 2 - 5)//IP addr
            return
        } else if (item.indexOf("|2|4|", 0) != -1) {
            OBLOQ_ANSWER_CMD = "WifiConnectFailure"
            OBLOQ_ANSWER_CONTENT = OBLOQ_STR_TYPE_IS_NONE
            return
        } else if (item.indexOf("|3|", 0) != -1) {//|3|errcode|message|
            let str = item.substr(3, size - 2 - 3)
            let num = str.indexOf("|")
            OBLOQ_ANSWER_CMD = str.substr(0, num)
            OBLOQ_ANSWER_CONTENT = str.substr(num + 1, str.length - OBLOQ_ANSWER_CMD.length - 1)
            return
        } else {
            return
        }
    }

    function onEvent() {
        if (!OBLOQ_SERIAL_INIT) {
            Obloq_serial_init()
        }
        //basic.showString("A")
        OBLOQ_MQTT_EVENT = OBLOQ_BOOL_TYPE_IS_TRUE
        obloqEventOn()
        //control.onEvent(<number>32, <number>1, Obloq_serial_recevice,16); // register handler
        serial.onDataReceived('\r', Obloq_serial_recevice )
        //control.onEvent(32, 1, Obloq_serial_recevice)
    }

} 