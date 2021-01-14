module.exports = { filterByYearNotSorted, filterByYearSorted };

const functions = require('./convertTime');
const d = require('./download');
const fs = require('fs');
/**
 * filter all movies by year and print it, all movies printed gona download image in a directory
 * @param {*} tab the JSON to filter
 * @param {*} year int
 * @param {*} path name of directory to create or to push in it
 */
function filterByYearNotSorted(tab, year, path) {
    tab.forEach(element => {
        if (functions.convertTime(element.release_date) === year) {
            if (!(fs.existsSync(path))) {
                fs.mkdir(path, callback => { });
            }
            d.downloadImage(element.poster, path + '/' + element.title.replace(/[^a-zA-Z0-9]/g, '_') + '.png');
            console.log(element.title);
        }
    });
}

/**
 * filter all movies by year and print it in console, all movies printed are download in a directory
 * @param {*} tab Json to filter
 * @param {*} year int 
 * @param {*} path directory name 
 * @param {*} start 0
 * @param {*} end tab.length - 1
 */
function filterByYearSorted(tab, year, path, start, end) {
    middle = Math.ceil((start + end) / 2);
    let convert = functions.convertTime(tab[middle].release_date);
    if (start < end) {
        if (convert === year) {
            if (!(fs.existsSync(path))) {
                fs.mkdir(path, callback => { });
            }
            d.downloadImage(tab[middle].poster, path + '/' + tab[middle].title.replace(/[^a-zA-Z0-9]/g, '_') + '.png');
            console.log(tab[middle].title);
        }
        filterByYearSorted(tab, year, start, middle - 1);
        filterByYearSorted(tab, year, middle + 1, end);
    }
}
