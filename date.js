'use strict';

function getDateISOString() {
    return new Date().toISOString();
}

function getTimeStampFromDateISOString () {
    return getDateISOString().split("T")[0];
}

export {getDateISOString, getTimeStampFromDateISOString};