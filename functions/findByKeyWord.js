module.exports = { findFilmByKeyWord };

/*
function findFilmByKeyWord(tab, keyWord, genre) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].genres) {
            for (let j = 0; j < tab[i].genres.length; j++) {
                if (tab[i].genres[j] === genre) {
                    if (tab[i].overview.includes(keyWord)) {
                        console.log(tab[i].title);
                    }
                }
            }    
        }
    }
}
*/


function findFilmByKeyWord(tab, keyWord, genre){
    tab.forEach(element => {
        if (element.genres){
            element.genres.forEach( ok => {
                if (ok === genre){
                    if (element.overview.includes(keyWord)){
                        console.log(element.title);
                    }
                }
            })   
        }
    });
}