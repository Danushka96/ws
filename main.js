const WebSocket = require('ws');

module.exports = function (url, socketPort, socketMessage, ssl) {
    let protocol = (ssl) ? "wss://" : "ws://";
    let socketUrl = (protocol + url);
    if (socketPort !== null){
        socketUrl += ":" + socketPort
    }
    const connection = new WebSocket(socketUrl);
    connection.onopen = () => {
        console.log("Connection opened and ready to communicate");
        if (socketMessage !== null) connection.send(socketMessage);
    };
    connection.onclose = () => {
        console.log("Connection closed");
    };
    connection.onerror = error => {
        console.error(`Error : ${error}`);
    };
    connection.onmessage = message => {
        console.log(`Message Received: ${message.data}`);
    }
};
