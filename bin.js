let argv = require('yargs')
    .usage('Usage: $0 url [options]')
    .command('count', 'Count the lines in a file')
    .example('$0 count -f foo.js', 'count the lines in the given file')
    .alias('u', 'url')
    .nargs('u', 1)
    .describe('u', 'socket URL')
    .alias('p', 'port')
    .nargs('p', 2)
    .describe('p', 'socket port')
    .alias('m', 'message')
    .describe('m', 'initial message')
    .nargs('m', 1)
    .alias('s', 'ssl')
    .describe('s', 'SSL certificate')
    .nargs('s', 4)
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
