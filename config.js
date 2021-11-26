export default {
    level: {
        info: {
            title: "\x1b[32m INFO "
        },
        warn: {
            title: "\x1b[33m WARN "
        },
        error: {
            title: "\x1b[41m ERROR "
        },
        info_low: {
            title: "\x1b[2m INFO_LOW ",
            message: "Added log message successfully!"
        },
        debug: {
            title: "\x1b[42m DEBUG "
        },
        trace: {
            title: "\x1b[46m TRACE "
        },
    },
    reset: "\x1b[0m",
    logsDirectory: "./logs"
};