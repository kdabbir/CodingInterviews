// TODO:
// Imperative Vs Declarative.

const movieDatabase = [
  { id: 1, name: 'Zurasic Park', director: 'Stephen Spielberg'},
  { id: 2, name: 'Interstellar', director: 'Christopher Nolan'},
  { id: 3, name: 'Inception', directors: ['Christopher Nolan', 'Jack Rider']},
  { id: 4, name: 'How I met your mother', director: 'Don Basco'}
];


// Write a function filter.
// Filter takes 3 arguments:
// 1. Array 2. Search String 3. Comparator function (Optional)

// Declarative Programming Paradigm.
function filterMovie(arr,string,fn){
  
  const results = [];
  const upperCaseString = string.toUpperCase();
  for(let item of arr){
    if(item.name.toUpperCase().indexOf(upperCaseString)!=-1) {
      results.push(item);
      continue;
    }
    const directorKey = item["director"] || item["directors"];
    if(directorKey){
      if(Array.isArray(directorKey)){
        for(let stringDirector of directorKey){
          if(stringDirector.toUpperCase().indexOf(upperCaseString)!=-1){
            results.push(item);
            break;
            }
        }
      } else if(directorKey.toUpperCase().indexOf(upperCaseString)!=-1) results.push(item); 
    }
  }
  return results;
  };




function filter(arr, str) {
    return arr.filter((movie) => {
        return movie.name.toLowerCase().search(str.toLowerCase()) > -1;
    });
}
  
  
  

console.log(filterMovie(movieDatabase, 'Nolan'));