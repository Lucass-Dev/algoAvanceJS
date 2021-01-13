let start = new Date();

const fs = require('fs');
var path = require('path');
const cD = require('./functions/concatDate');
const wF = require('./functions/writeFile');
let allArgs = process.argv;

if (allArgs[2] === "-action") {

    switch (allArgs[3]) {
        case "-sortByDate":
            break;
        case "-sortByName":
            break;
        case "-help":
            console.log("Available commands :\n-sortByName : Sort all movies by name\n-sortByDate : Sort all movies by release date")
            break;
        case "-transform":
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
            console.log("Command not found\nPlease try '-action -help' for more commands")
    }

} else {
    console.log('Please try "-action -help" for more commands');
}

let time = new Date() - start;
console.log("Execution time : " + time + " ms");