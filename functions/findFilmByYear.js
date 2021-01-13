module.exports = { filterByYearNotSorted, filterByYearSorted };

const functions = require('./convertTime');
const d = require('./download');
const fs = require('fs');

function filterByYearNotSorted(tab, year, path) {
    tab.forEach(element => {
        if (functions.convertTime(element.release_date) === year) {
            if (!(fs.existsSync(path))) {
                fs.mkdir(path, callback => { });
            }
            d.downloadImage(element.poster, path + '/' + element.title + '.png');
            console.log(element.title);
        }
    });
}


function filterByYearSorted(tab, year, path, start, end) {
    middle = Math.ceil((start + end) / 2);
    let convert = functions.convertTime(tab[middle].release_date);
    if (start < end) {
        if (convert === year) {
            if (!(fs.existsSync(path))) {
                fs.mkdir(path, callback => { });
            }
            d.downloadImage(tab[middle].poster, path + '/' + tab[middle].title + '.png');
            console.log(tab[middle].title);
        }
        filterByYearSorted(tab, year, start, middle - 1);
        filterByYearSorted(tab, year, middle + 1, end);
    }
}
