'use strict';
import config from './config.js';
import fs from "fs";
import {getDateISOString, getTimeStampFromDateISOString} from "./date.js";
import dotenv from "dotenv";
dotenv.config();

export default class {
    #loggingFilePath = process.env.LOGGING_FILE_PATH;

    /**
     * Console log process.
     * @param message
     * @param level
     */
    #log(message, level) {
        console.log(getDateISOString(), level.title, config.reset, message);
    }


    #mkdir() {
        !fs.existsSync(this.#loggingFilePath) ? fs.mkdirSync(this.#loggingFilePath) : "Directory already exists!";
    }

    /**
     *
     * @param message
     */
    #appendLogFile(message) {
        const file = `${this.#loggingFilePath}/${process.env.LOGGING_FILE_NAME_PREV}_${getTimeStampFromDateISOString()}.txt`;
        this.#mkdir();

        if (fs.existsSync(this.#loggingFilePath)) {
            const logStream = fs.createWriteStream(file, {flags: 'a'});
            logStream.write(`${message}\n`, (error) => {
                error ? this.#log(error, config.level.error) : this.#log(config.level.info_low.message, config.level.info_low);
            });
        }
    }

    /**
     * https://stackify.com/node-js-logging/
     * @param message to be written into the console for level: INFO.
     */
    info(message) {
        this.#log(message, config.level.info);
    }

    warn(message) {
        this.#log(message, config.level.warn);
    }

    error(message) {
        this.#log(message, config.level.error);
    }

    debug(message) {
        this.#log(message, config.level.debug);
    }

    trace(message) {
        this.#log(message, config.level.trace);
    }

    /**
     * @param message to be written into the file.
     */
    appendLogToFile(message) {
        this.#appendLogFile(message);
    }
}