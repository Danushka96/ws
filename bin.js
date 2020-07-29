let argv = require('yargs')
    .usage('Usage: ws -u echo.websocket.org -m test')
    // .command('count', 'Count the lines in a file')
    .example('ws -u echo.websocket.org -m test', '')
    .alias('u', 'url')
    .nargs('u', 1)
    .describe('u', 'socket URL')
    .alias('p', 'port')
    .nargs('p', 1)
    .describe('p', 'socket port')
    .alias('m', 'message')
    .describe('m', 'initial message')
    .nargs('m', 1)
    .alias('s', 'secured')
    .describe('s', 'wss protocol')
    .nargs('s', 1)
    .demandOption(['u'])
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2020')
    .argv;

let socketURL = argv.url;
let socketPort = argv.port || null;
let socketMessage = argv.message || null;
let ssl = argv.ssl || false;

require(".")(socketURL, socketPort, socketMessage, ssl);
