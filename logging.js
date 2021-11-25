'use strict';
import config from './config.js';
import fs from "fs";

export default class {
    #date = new Date().toISOString();

    #log(message, level) {
        const getLogConfig = config.level[level];

        // Console logging.
        console.log(this.#date, config.bright, getLogConfig.txtColor, getLogConfig.title, config.reset, message);
    }

    async #mkdir() {
        let flag = fs.existsSync(config.logsDirectory);
        if(!flag) {
            await fs.mkdirSync(config.logsDirectory);
            flag = true
        }
        return flag;
    }

    async #appendLogFile(message) {
        const filename = this.#date.split("T")[0],
            createDirectory = await this.#mkdir();
        console.log(createDirectory)
        if (createDirectory) {
            const logStream = fs.createWriteStream(`${config.logsDirectory}/${filename}.txt`, {flags: 'a'});
            logStream.write(`${message}\n`, (error) => {
                return error
                    ? this.#log(error, 2)
                    : this.#log(config.level["3"].addedLogSuccess, 3);
            });
        }
    }

    log(message, level) {
        this.#log(message, level);
    }

    async appendLogFile(message) {
        await this.#appendLogFile(message);
    }
}