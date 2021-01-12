module.exports = { concatDate };

const functions = require('./convertTime')

function concatDate(json, index){

    let date = functions.convertTime(json[index].release_date);
    json[index].title = json[index].title + " (" + date + ")";
    return json[index].title;
}

let movies = require('../movies.json');

console.log(movies[0].title);
console.log(concatDate(movies, 0));
