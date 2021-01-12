module.exports = { convertTime };

function convertTime(time){
    let x = new Date(time * 1000);
    let year = x.getFullYear()
    return year;
}