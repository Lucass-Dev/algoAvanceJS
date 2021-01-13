module.exports = { concatDate };

const functions = require('./convertTime')

function concatDate(json){
    json.forEach(element => {
        let date = functions.convertTime(element.release_date);
        element.title = element.title + " (" + date + ")";
    });
    return json;
}
