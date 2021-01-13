module.exports = { filterByYearNotSorted, filterByYearSorted };

const functions = require('./convertTime')

function filterByYearNotSorted(tab, year) {
    tab.forEach(element => {
        if (functions.convertTime(element.release_date) === year) {
            console.log(element.title);
        }
    });
}


function filterByYearSorted(tab, year, start, end){
    middle = Math.ceil((start + end) / 2);
    let convert = functions.convertTime(tab[middle].release_date);
    if (start < end) {
        if (convert === year){
            console.log(tab[middle].title);
        }
        filterByYearSorted(tab, year, start, middle - 1);
        filterByYearSorted(tab, year, middle + 1, end);
    }
}
