module.exports = { downloadImage };

const fs = require('fs');
const request = require('request');


const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
        request(url).pipe(fs.createWriteStream(path)).on('close', callback);

    })
}

function downloadImage(url, path) {
    download(url, path, () => { })
}
