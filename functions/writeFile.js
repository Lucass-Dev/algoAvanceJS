module.exports={writeFile};
const fs = require('fs');

function writeFile(outputFile, writtenText) {
    let writtenFile = JSON.stringify(writtenText);
    fs.appendFileSync(outputFile,writtenFile);
}
