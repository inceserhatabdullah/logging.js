'use strict';
import Logging from "./logging.js";
(async () => {
    const logging = new Logging();
    logging.log("hi", 0);
    await logging.appendLogFile("1234");
})()