'use strict';
import config from './config.js';
import fs from "fs";
import {getDateISOString, getTimeStampFromDateISOString} from "./date.js";

export default class {

    /**
     *
     * @param message
     * @param level
     */
    #log(message, level) {
        console.log(getDateISOString(), level.title, config.reset, message);
    }

    /**
     *
     * @param path
     */
    #mkdir(path) {
        if (!fs.existsSync(path))
            fs.mkdirSync(path);
    }

    /**
     *
     * @param message
     * @param path
     * @param filename
     */
    #appendLogFile(message, path, filename) {
        this.#mkdir(path);

        if (fs.existsSync(path)) {
            const logStream = fs.createWriteStream(`${path}/${filename}.txt`, {flags: 'a'});
            logStream.write(`${message}\n`, (error) => {
                error ? this.#log(error, config.level.error) : this.#log(config.level.info_low.message, config.level.info_low);
            });
        }
    }

    /**
     * https://stackify.com/node-js-logging/
     * @param message content to be written.
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
     * @param path of the directory, default path: ./logs
     * @param filename the name of the file to logs. default timestamp value ex: 2021-11-26.txt
     */
    appendLogFile(message, path = config.logsDirectory, filename = getTimeStampFromDateISOString()) {
        this.#appendLogFile(message, path, filename);
    }
}