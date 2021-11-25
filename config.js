export default {
    level: {
        0: {
            title: "INFO",
            txtColor: "\x1b[32m"
        },
        1: {
            title: "WARN",
            txtColor: "\x1b[33m"
        },
        2: {
            title: "ERR!",
            txtColor: "\x1b[31m"
        },
        3: {
            title: "INFO_LOW",
            txtColor: "\x1b[2m",
            addedLogSuccess: "Added log message successfully!"
        }
    },
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    logsDirectory: "./logs"
};