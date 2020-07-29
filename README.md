# WS
CLI TOOL to check Connection of [WebSockets](https://en.wikipedia.org/wiki/WebSocket).

## Examples

### Connect to public echo server

```
$ ws -u echo.websocket.org
```
### With custom port

```
$ ws -u echo.websocket.org -p 8080
```

### With initial message

```
$ ws -u echo.websocket.org -m testMessage
```

### With WSS protocol

```
$ ws -u echo.websocket.org -s true
```
## Features

* Connecting to and serving WebSockets from command line.
* Text and binary modes, converting between lines (or null-terminated records) and messages.
* Linux, Windows and Mac support, [pre-built executables][releases].

[releases]:https://github.com/danushka96/ws/releases

# Installation

There are multiple options for installing WebSocat. From easy to hard:

* Download a pre-build executable and install it to PATH.
