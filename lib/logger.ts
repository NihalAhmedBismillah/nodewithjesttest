
let colors = require('colors');
export const logs = require('tracer').colorConsole({
    level: 'info',
    format: [
        "{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})", //default format
        {
            error: "{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})\nCall Stack:\n{{stack}}" // error format
        }
    ],
    dateformat: "HH:MM:ss.L",
    preprocess: function (data) {
        data.title = data.title.toUpperCase();
    },
    filters: {
        //log : colors.black,
        trace: colors.magenta,
        debug: colors.blue,
        info: colors.green,
        warn: colors.yellow,
        error: [colors.red, colors.bold]
    }
});
