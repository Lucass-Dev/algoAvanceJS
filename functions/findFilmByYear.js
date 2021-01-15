module.exports = { filterByYearNotSorted, filterByYearSorted };

const functions = require('./convertTime');
const d = require('./download');
const fs = require('fs');
const request = require('request');


/**
 * filter all movies by year and print it, all movies printed gona download image in a directory
 * @param {*} tab the JSON to filter
 * @param {*} year int
 * @param {*} path name of directory to create or to push in it
 */
function filterByYearNotSorted(tab, year, save = false, path = undefined) {
    tab.forEach(element => {
        if (functions.convertTime(element.release_date) === year) {
            console.log(element.title);
            if (save && !(path === undefined)) {
                if (!(fs.existsSync(path))) {
                    fs.mkdir(path, callback => { });
                }
                if (element.poster) {
                    d.downloadImage(element.poster, path, element.title);
                }
            }
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
function filterByYearSorted(tab, year, save, path, start, end) {
    middle = Math.ceil((start + end) / 2);
    let convert = functions.convertTime(tab[middle].release_date);
    if (start < end) {
        if (convert === year) {
            if (save && !(path === undefined)) {
                if (!(fs.existsSync(path))) {
                    fs.mkdir(path, callback => { });
                }
                d.downloadImage(tab[middle].poster, path, tab[middle].title);
            }
            console.log(tab[middle].title);
        }
        filterByYearSorted(tab, year, save, path, start, middle - 1);
        filterByYearSorted(tab, year, save, path, middle + 1, end);
        
    }
}
