module.exports = { replaceChar };

let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function replaceChar(title) {
    title.replace(!(/[a - z]/i || /[A - Z]/i || /[0 - 9]/i), "-");
    return title;
}


let test = "City@of@Joy";
console.log(replaceChar(test));
console.log(test);