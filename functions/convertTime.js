module.exports = { convertTime };

function convertTime(json){
    let x = new Date(json * 1000);
    let year = x.getFullYear()
    return year;
}
