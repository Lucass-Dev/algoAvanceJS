const { convertTime } = require('./functions/convertTime');
const functions = require('./functions/convertTime')

let movies = require('./movies.json');

console.log(convertTime(movies[0].release_date));
const ok = movies[0].title + " (2019) ";
console.log(ok);
console.log(movies[0].title + "("+ convertTime(movies[0].release_date) + ")" );
console.log(movies[0].title);

function sort(tab){
    for(var i = 0; i < tab.length; i++){
      var min = i; 
      for(var j = i+1; j < tab.length; j++){
        if(tab[j].release_date < tab[min].release_date){
         min = j; 
        }
      }
      var tmp = tab[i];
      tab[i] = tab[min];
      tab[min] = tmp;
    }
    return tab;
  };

console.log(sort(movies))