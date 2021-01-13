const fs = require('fs');
const path = require('path');

const cD = require('./functions/concatDate');
const wF = require('./functions/writeFile');
const sD = require('./functions/sortByDate');
const sN = require('./functions/sortByName');
const fY = require('./functions/findFilmByYear');
const fK = require('./functions/findByKeyWord');

let allArgs = process.argv;

blue = "\x1b[34m";
red = "\x1b[31m";
white = "\x1b[37m";


let start = new Date();

if (allArgs[2] === "-action") {

    switch (allArgs[3]) {
        case "searchKeyWord":
            if ((fs.existsSync(allArgs[4])) && (path.extname(allArgs[4]) === '.json')) {
                let movies = require('./' + allArgs[4]);
                let keyword = allArgs[5];
                let genre = allArgs[6];
                fK.findFilmByKeyWord(movies, keyword, genre);
            } else {
                console.log("File do not exist");
            }
            break;
        case "searchDate":
            if ((fs.existsSync(allArgs[4])) && (path.extname(allArgs[4]) === '.json')) {
                let date = parseInt(allArgs[5]);
                let movies = require('./' + allArgs[4]);
                if (allArgs[6] === 'false') {
                    fY.filterByYearNotSorted(movies, date);
                } else {
                    fY.filterByYearSorted(movies, date, 0, movies.length - 1);
                }
            } else {
                console.log("File do not exist");
            }
            break;
        case "sortByDate":
            if ((fs.existsSync(allArgs[4])) && (path.extname(allArgs[4]) === '.json')) {
                let output = allArgs[5];
                if (path.extname(output) === '.json') {
                    let movies = require('./' + allArgs[4]);

                    let temp = sD.sortByDate(movies, 0, movies.length);
                    wF.writeFile(output, temp);
                } else {
                    console.log("The ouput file hasn't the right extension, try again with a \".json\" file");
                }
            } else {
                console.log("File do not exist");
            }
            break;
        case "sortByName":
            if ((fs.existsSync(allArgs[4])) && (path.extname(allArgs[4]) === '.json')) {
                let output = allArgs[5];
                if (path.extname(output) === '.json') {
                    let movies = require('./' + allArgs[4]);

                    let temp = sN.sortByName(movies);
                    wF.writeFile(output, temp);
                } else {
                    console.log("The ouput file hasn't the right extension, try again with a \".json\" file");
                }
            } else {
                console.log("File do not exist");
            }
            break;
        case "help":
            console.log('\x1b[31m',"Available commands :\n" + '\x1b[34m',"sortByName <file.json> <output.json> : " + '\x1b[37m',"Sort all movies by name\n" + '\x1b[34m',"sortByDate <file.json> <output.json> : " + '\x1b[37m',"Sort all movies by release date\n" + '\x1b[34m',"transform <file.json> <output.json> : " + '\x1b[37m',"Concat release date of the movie with the title\n" + '\x1b[34m',"searchDate file.json <date> <true/false> : " + '\x1b[37m',"Find all movies with the entered date\n" + '\x1b[34m',"searchKeyWord <file.json> <keyword> <genre> : ","\x1b[0m");
            break;
        case "transform":
            if ((fs.existsSync(allArgs[4])) && (path.extname(allArgs[4]) === '.json')) {
                let output = allArgs[5];
                if (path.extname(output) === '.json') {
                    // Code pour concate
                    // Creer un nouveau fichier Json qui sert d'output
                    let movies = require('./' + allArgs[4]);
                    let temp = cD.concatDate(movies);
                    wF.writeFile(output, temp);

                } else {
                    console.log("The ouput file hasn't the right extension, try again with a \".json\" file");
                }
            } else {
                console.log("File do not exist");
            }
            break;
        default:
            console.log("Command not found\nPlease try '-action help' for more commands")
    }

} else {
    console.log('Please try "-action help" for more commands');
}

let time = new Date() - start;
console.log("Execution time : " + time + " ms");