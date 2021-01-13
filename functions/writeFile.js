module.exports={writeFile};
const fs = require('fs');

function writeFile(outputFile, writtenText) {
    let writtenFile = JSON.stringify(writtenText, null, "\t");
    fs.appendFileSync(outputFile,writtenFile);
}
